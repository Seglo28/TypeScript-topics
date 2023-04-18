import { Animal } from "./08-clases";

export class Hero{

   // public person : Person;

    constructor(
        public nickName : String,
        public power : number,
        public animal: Animal,
    ){
    }
}

// Creating a object outside the class

const personalData = new Animal('Marcos','Soyapango');
const data = new Hero('Batman', 80, personalData);

console.log(data);
