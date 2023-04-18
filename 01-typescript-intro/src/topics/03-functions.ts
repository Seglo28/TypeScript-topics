//-------------------------------------------------------------------------------------------------------

//DECLARING FUNCTIONS

function suma (firtsNumber : number, secondNumber: number) : number{
return firtsNumber + secondNumber;
}

function resta (firtsNumber : number, secondNumber: number) : String{
    return `${firtsNumber - secondNumber}`;
}

function multiplicacion (firtsNumber : number, secondNumber?: number, base : number = 2) : String{
    return `${firtsNumber * base}`;
}

//Using my functions : DECLARING FUNCTIONS

const usingSuma : number = suma(1, 2);
const usingResta : String = resta(3,2);
const usingMultiplicacion : String = multiplicacion(2);


//Printing DECLARING FUNCTIONS using console
//console.log({usingSuma, usingResta, usingMultiplicacion});

//-------------------------------------------------------------------------------------------------------

//FUNCIONES CON OBJETOS COMO ARGUMENTOS

interface character{
    name : string;
    hp : number;
    showHp: () => void;
}

const healCharacter = (Character: character, amount:number) =>{
    Character.hp += amount
}

const personaje: character = {
    name: 'Carmen',
    hp : 50,
    showHp() {
        console.log(`${this.name} Puntos de vida ${this.hp}`);
    }
}

healCharacter(personaje, 10)
healCharacter(personaje, 110)
healCharacter(personaje, -160)

personaje.showHp();

