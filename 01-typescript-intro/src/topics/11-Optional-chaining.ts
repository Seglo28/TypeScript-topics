//Encadenamiento opcional

export interface Passenger {
    name: String;
    children ? : String[];
}

//-------------------------------------------------------------------

//Creating many "Passenger" objects
const passenger1 : Passenger = {
    name : 'Carolina',
    children : ['Javier', 'Sebas'],
}

const passenger2 : Passenger = {
    name : 'Gloria',
}

const passenger3 : Passenger = {
    name : 'Jenny',
    children: ['Leydi', 'Aristides', 'Oliver'],
}

//--------------------------------------------------------------------
//Look for one passenger information

const passegerInformation = (passenger : Passenger) => {
    
    const manyChildren = passenger.children?.length || 0;

    console.log(passenger.name+' tiene '+manyChildren+' hijos.-')
}


console.log(passegerInformation(passenger2));