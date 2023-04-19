

export function WhatsMyType<T>(argument : T)  : T{
return argument;
}

const amIString = WhatsMyType('Gloria');
const amINumber = WhatsMyType(5);
const amIArray = WhatsMyType([1,2,3,'Gato', ['miau', 'woof']]);
const arregloDeNumeros = WhatsMyType<number[]>([1,2,3,4]); 

console.log('String = '+
amIString.length+
'. Number= '+amINumber+
'. Array= '+amIArray+
'. Arreglo de numeros = '+ arregloDeNumeros );