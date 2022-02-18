import { useEffect, useState } from 'react';
/*

  CUSTOM REACT HOOKS

  los custom react Hooks son funciones que nos permiten acortar recortar el codigo 
  que se encuentra dentro de nuestro componente, Ejemplo:
  
  - En este caso se creo un custom react hook para poder separar la logica de nuestro "Local Storage"
  de nuestro componente "App" y asi poder refactorizar el codigo de una mejor manera.

*/
function useLocalStorage(itemName, initialValue) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    /*
      Cuando creamos un Custom React Hooks vamos a poder
      hacer uso de los estados de ReactJS y muchas cosas mas.
    */
  
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
  
        try { 
  
          // Obteniendo el valor que se encuentra guardado en local storage
          const localStorageItem = localStorage.getItem(itemName);
          
          // Creacion de la variable "parsedItem"
          let parsedItem;
  
          // Verificando si 'localStorageItem' se encuentra vacio o no    
          if (!localStorageItem)  {
            
            // Si, si se encuentra vacio vamos a asignarle un valor por defecto y ademas se le asignar un valor tambien a la variable "parsedItem"
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
  
          } else { 
            
            /*
  
              Si, no se encuentra vacio, 
              vamos a pasarle el valor de la variable 'localStorageItem' a 'parsedItem' 
              haciendo el parseo
  
            */
          parsedItem = JSON.parse(localStorageItem);
  
          }
  
          setItem(parsedItem);
          setLoading(false);
        
        } catch(err) {
  
          setError(err);
        }
  
      }, 1000);
    });
  
    /*
      checkValuesItem es una funcion que verifica los cambios
      echos por el usuario en el List-TODO, ya sea para completar
      una de las tareas o eliminar las tareas deseadas
  
      Esta funcion retorna un array donde la primera posicion es
      el valor del estado creado y la misma funcion
    */
  
    const checkValuesItem = (newArrayItem) => {
      
      try {
  
        const stringifiedItem = JSON.stringify(newArrayItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newArrayItem);
      
      } catch(err) {
        setError(err);
      }
    };
  
  
    /*
      
      Convencion de React Hooks -> Si el Custom React Hooks solo tiene dos elementos, el estado
      y el actualizador podemos enviar un array de 2 posicion PERO si tenemos mas de un estado en react hook
      la recomendación es retonar un objecto en lugar de un array
    
    */
  
    return {
      item,
      checkValuesItem,
      loading,
      error
    };
}

export { useLocalStorage }