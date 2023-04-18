//Make an interface

interface SuperHero{
    name : String,
    age : number,
    address : Address;
    showAddresses : () => String;
}

interface Address {
    street : String;
        country : String;
        city: String;
}


const superHeroe: SuperHero = {
    name: 'Gloria',
    age: 28,
    address : {
        street : 'main Street',
        country : 'El Salvador',
        city: 'Soyapango'
    },
    showAddresses(){
        return this.name+ ', '+this.address.city+ ', '+ this.age;
    }
}

const result = superHeroe.showAddresses();

console.log(result);