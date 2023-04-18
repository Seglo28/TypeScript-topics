
//EMPLOYEES TAXES


//--------------------------------------------------------

//Only an employee
interface employee {
    name : String;
    kindOfWork: String;
    salary: number;
}

//--------------------------------------------------------

//Add more than and employee
interface  dataAndTaxes {
    employees : employee[];

    //Taxes
    isssTax: number;
    afpTax: number;
    rentTax: number;
}

//-------------------------------------------------------

//Method using the information
function taxesCalculator1(data : dataAndTaxes) : number[]{
let total = 0;

data.employees.forEach(data =>{
    total += data.salary;
})

return [total, total * data.isssTax, total*data.afpTax, total*data.rentTax];
}




//-------------------------------------------------------

//Enployees personal data

const employee1 : employee = {
    name : 'Andres Alvarenga',
    kindOfWork: 'Marketing',
    salary : 500,

}

const employee2 : employee = {
    name : 'Gloria Sevilla',
    kindOfWork: 'Jr developer',
    salary : 1200,

}

const employee3 : employee = {
    name : 'Alcides Gonzalez',
    kindOfWork: 'Traductor',
    salary : 600,

}

//-----------------------------------------------------

//Data in variables

const employeeList =  [employee1, employee2, employee3];
const isssTaxData = 0.03;
const aftTaxData = 0.0725;
const rentTaxData = 0.010;

//------------------------------------------------------------  


//Adding data in the method  taxesCalculator1
const calcules = taxesCalculator1 ({
    employees : employeeList,
    isssTax : isssTaxData,
    afpTax : aftTaxData,
    rentTax : rentTaxData
});

//-----------------------------------------------------------

//Print method taxesCalculator1
console.log(calcules);

