// IMPORTAR DEPENDENCIAS Y LA FUNCION A PROBAR
import { suma } from "../src/utils/EJEMPLO.JS";

// DEFINIR UN BLOQUE DE PRUEBAS
/* Palabras reservadas para hacer un bloque de pruebas 
    Describe -> Agrupar el bloque de pruebas
    It -> Define casos individuales dentro de cada bloque de pruebas
    Expect - toBe -> Que esperamos que suceda (Cual es la respuesta esperada)
*/

describe(
    'Prueba de la funcion Suma', //DESCRIPCION
    ()=>{
        // Caso 1 = suma ne numeros positivos 
        it(
            'Suma de 2 numeros positivos CORRECTAMENTE',
            ()=>{
                expect(suma(5,2)).toBe(7);
            }
        );

        // Caso 2 = suma de numeros negativos
        it(
            'Suma de numeros negativos CORRECTAMENTE',
            ()=>{
                expect(suma(-5, -2)).toBe(-7);
            }
        );
    }
);