
//Desestructurización de argumentos

export interface product{
    description : string;
    price : number;
}

//--------------------------------------------------------------------------------------------------

interface taxesCalculationOptions{
    tax: number;
    products: product[];
}

//--------------------------------------------------------------------------------------------------

export function taxesCalculator(options : taxesCalculationOptions) : number[] {
    let total = 0;

    options.products.forEach(product =>{
        total += product.price;
    })

    return [total, total * options.tax];
}



//--------------------------------------------------------------------------------------------------

const phone :  product = {
    description : 'Iphone-14',
    price : 10,
}

const Tablet :  product = {
    description : 'Ipad Mini',
    price : 5,
}

//const {description} = phone;
//const {price} = phone;

//----------------------------------------------------------------------------------------------------

const shoppingCar  = [phone, Tablet];
const taxes : number = 0.15

//---------------------------------------------------------------------------------------------------

const results  = taxesCalculator({
    products: shoppingCar,
    tax: taxes,
})

//----------------------------------------------------------------------------------------------------

//console.log('Total sin impuestos: $'+results[0]);
//console.log('Impuestos por pagar: $'+results[1]);

//export{}