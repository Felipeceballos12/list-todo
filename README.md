### MANEJO DE EFECTOS (useEffect)

**¿Qué es?** -> Es un react hook que nos permite controlar las actualizaciones del render
cada vez que se ejecuta un cambio en nuestro componente, dicho useEffect se actualizara
dependiendo de las condiciones dadas dentro del mismo.

- useEffect recibe dos parametros:

  1.  una función (¿Se le puede llamar un callback?) en la cual vamos a especificar
      toda la logica que queremos realizar.

            ej: useEffect(() => {
            console.log('Toda la logica va ir acá');
            });

  2.  un array vacio para indicar que solo se rendericé una sola vez o una variable
      dentro del array o sin el array para indicar que solo queremos renderizar si el valor
      de la variable cambia.

            ej: useEffect(() => {
            console.log('estoy dentro del useEffect y me renderizare solo una vez');
            }, []);

- **¿Porque usamos useEffect?** -> se usa useEffect cuando tenemos información por default

console.log('me encuentro antes del useEffect');

useEffect(() => {
console.log('Soy un useEffect')
});

console.log('me encuentro despues del useEffect');

### REACT PORTALES

Nos permiten teletransportar componentes.
