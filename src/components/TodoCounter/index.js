import React from "react";

const estilos = {
  fontWeight: 900,
  textAlign: "center",
  color: "#fff",
};

function TodoCounter({ completedTodosTask, totalTodosTask }) {
  return (
    <h2 style={estilos}>
      Has completado {completedTodosTask} de {totalTodosTask} TODOs
    </h2>
  );
}

export { TodoCounter };
