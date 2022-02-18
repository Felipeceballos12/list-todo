import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    
    const [newTodoValue, setNewTodoValue] = useState('');
    const { 
        addTaskTodo,
        setModalOpen,
    } = useContext(TodoContext);

    const onTextTodoChange = (event) => {
        // TODO
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        // TODO
        setModalOpen(false);
    }

    const onSubmitTodo = (e) => {
        // TODO
        e.preventDefault();
        
        addTaskTodo(newTodoValue);
        setModalOpen(false);
    }
    
    return (
        <form onSubmit={onSubmitTodo}>
            <label>Nuevo TODO:</label>
            <textarea
                value={ newTodoValue }
                onChange={ onTextTodoChange }
                placeholder='Tener una certificación en Platzi por semana'
            />
            <div className='TodoForm-ButtonContainer'>
                <button
                    type='button'
                    className='TodoForm-Button TodoForm-Button-cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className='TodoForm-Button TodoForm-Button-add'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };