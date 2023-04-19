/*DECORADOR: se lo ponemos para demostrar que la clase es un 
  servicio, modulo, o personalizada*/

@decorator
export class theClass {

    public classProperty : string = 'Abc';

    print(){
        console.log('Hola mundo');
    }

}
//FUERA DE LA CLASE

console.log(theClass)

const a = new theClass();
console.log(a)


/********************************************** */
/********************************************** */
/********************************************** */


//DECORADOR
/*  Un decorador no es mas que una función
    normalmente yo no los creare solo los consumire
*/

function decorator(constructor: any)
    {
            return class extends constructor{
                newDecoratorProperty1 = 'aaaa';
                newDecoratorProperty2 = 'bbbbbbb';

            }
    }