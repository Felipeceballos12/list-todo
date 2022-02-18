import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/index";


const estilos = {
    fontWeight: 900,
    textAlign: 'center',
    color: '#fff',
}

function TodoCounter() {

    const { completedTodosTask, totalTodosTask } = useContext(TodoContext);

    return (
        <h2 style={estilos}>Has completado { completedTodosTask } de { totalTodosTask } TODOs</h2>
    );
}

export { TodoCounter };