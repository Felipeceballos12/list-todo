import React, { useContext } from "react";
import { TodoCounter } from "../TodoCounter/index";
import { TodoList } from "../TodoList/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { TodoContext } from "../TodoContext/index";
import { Modal } from "../Modal/index";
import { TodoForm } from "../TodoForm";
import TodoHeader from "../TodoHeader";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTaskTodo,
    deleteTaskTodo,
    modalOpen,
    setModalOpen,
    searchValue,
    setSearchValue,
    completedTodosTask,
    totalTodosTask,
  } = useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          completedTodosTask={completedTodosTask}
          totalTodosTask={totalTodosTask}
        />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {error && <p>Desespérate, hubo un error... </p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO.</p>}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleteTaskTodo={() => completeTaskTodo(index)}
            onDeleteTaskTodo={() => deleteTaskTodo(index)}
          />
        ))}
      </TodoList>

      {!!modalOpen && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setModalOpen={setModalOpen} isModalOpen={modalOpen} />
    </React.Fragment>
  );
}

export { AppUI };

/*
    MANERAS DE PASAR INFORMACIÓN USANDO REACT CONTEXT
    
    Existen dos maneras:

        1. directamente pasando el componente consumer:

            <TodoContext.Consumer> // Componentes Consumer
                { // Pasando la información del hijo
                    ({ error, loading, searchedTodos, completeTaskTodo, deleteTaskTodo }) => { // Se crea una arrow function o componente donde los argumentos seran
                        return (                                                               // el value que pasamos cuando creamos nuestro React Context a nuestro           
                            <TodoList>                                                         // Provider.                
                                { error && <p>Desespérate, hubo un error... </p> }
                                { loading && <p>Estamos cargando, no desesperes...</p> }
                                { (!loading && !searchedTodos.length) && <p>Crea tu primer TODO.</p> }
                                {
                                    searchedTodos.map((todo, index) => (
                                        <TodoItem 
                                        key={ todo.text } 
                                        text={ todo.text } 
                                        completed={ todo.completed }
                                        onCompleteTaskTodo={ () => completeTaskTodo(index) }
                                        onDeleteTaskTodo={ () => deleteTaskTodo(index) }
                                        />
                                ))
                                }
                            </TodoList>  
                        );
                    }
                }
            </TodoContext.Consumer>
        
        2. usando useContext:

            function AppUI() {

                // usamos useContext para pasar los props o estados que se encuentran en nuestro TodoContext
                const { error, loading, searchedTodos, completeTaskTodo, deleteTaskTodo } = React.useContext(TodoContext);

                return (
                    <React.Fragment>
                        <TodoCounter />
                        <TodoSearch />
                        
                        <TodoList>
                            { error && <p>Desespérate, hubo un error... </p> }
                            { loading && <p>Estamos cargando, no desesperes...</p> }
                            { (!loading && !searchedTodos.length) && <p>Crea tu primer TODO.</p> }
                            {
                                searchedTodos.map((todo, index) => (
                                    <TodoItem 
                                        key={ todo.text } 
                                        text={ todo.text } 
                                        completed={ todo.completed }
                                        onCompleteTaskTodo={ () => completeTaskTodo(index) }
                                        onDeleteTaskTodo={ () => deleteTaskTodo(index) }
                                    />
                                ))
                            }
                        </TodoList>  
                        
                        <CreateTodoButton />
                    </React.Fragment>
                );
            }
        
*/
