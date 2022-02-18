import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
/*
    Como crear REACT CONTEXT
*/

const TodoContext = React.createContext();

function TodoProvider(props) {

    // Usando en Custom React Hook creado en la parte de arriba 
    const {
        item: todos, 
        checkValuesItem: checkValuesTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    
    const [searchValue, setSearchValue] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchedTodos >= 1) {

        searchedTodos = todos;
    
    } else {

        searchedTodos = todos.filter(todo => {
        
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return todoText.includes(searchText);
        
        });
        
    }

    const addTaskTodo = (text) => {
        const newTodos = [...todos];
    
        newTodos.push({
            completed: false,
            text,
        });

        checkValuesTodos(newTodos);
    };
    
    const completeTaskTodo = (indexTodo) => {
        const newTodos = [...todos];
    
        newTodos[indexTodo].completed = true;

        checkValuesTodos(newTodos);
    };

    const deleteTaskTodo = (indexTodo) => {
        const newTodos = [...todos];
    
        newTodos.splice(indexTodo, 1);

        checkValuesTodos(newTodos);
    };


    return(
        <TodoContext.Provider value={{
            error: error,
            loading: loading,
            completedTodosTask: completedTodos,
            totalTodosTask: totalTodos,
            searchValue: searchValue,
            setSearchValue: setSearchValue,
            searchedTodos: searchedTodos,
            completeTaskTodo: completeTaskTodo,
            deleteTaskTodo: deleteTaskTodo,
            modalOpen: modalOpen,
            setModalOpen: setModalOpen,
            addTaskTodo: addTaskTodo,
        }}>
            { props.children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };