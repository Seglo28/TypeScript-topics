//---------------------------------------------------------------------------

//Creating an exportable class
export class Person{

    //Writting public variables
    public name ?: string; // = '';
    public address : string; // = '';

    //Starting using a constructor
    constructor(){
        this.name = 'Martin';
        this.address = 'Apopa';
    }
}

//-----------------------------------------------------------------------------

// Creating a object outside the class
const iroman = new Person();

//----------------------------------------------------------------------------

// Using variables to add information
var person1 = iroman.name = 'Javier';
var address1 = iroman.address = 'Soyapango';

// printing variables
//console.log(person1,address1);


//---------------------------------------------------------------------------

//printing object that was started using a constructor inside the class.-
//console.log(iroman);

//---------------------------------------------------------------------------

/******************************************************************** */
/******************************************************************** */
/******************************************************************** */

export class Animal {

    constructor(public name : string, public kind ? : string){
        this.name = name;
        this.kind = kind;
    }
}
//-----------------------------------------------------------------------------

// Creating a object outside the class

const animals = new Animal('Fido', 'dog');

//printing object that was started using a constructor inside the class.-
//console.log(animals);

//---------------------------------------------------------------------------

/******************************************************************** */
/******************************************************************** */
/******************************************************************** */

export class food{

    constructor(
        public name : string = 'Spaguetti',
        public kind : string = 'pasta',
    ){}
}

// Creating a object outside the class

var deliciousfood = new food('frie chiken', 'chiken');

//console.log(deliciousfood);

/******************************************************************** */
/******************************************************************** */
/******************************************************************** */

export class Kichen extends food{

    constructor(
        public fire : String
    ){
        super();
        this.fire = fire;
    }
}

// Creating a object outside the class

var cooking = new Kichen('hot');

//console.log(cooking)