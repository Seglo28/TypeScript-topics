
import {product, taxesCalculator} from './06-function-destructuring';


const shoppingCart: product[] = [
    {
        description: 'nokia',
        price: 150
    },
    {
        description: 'samsung',
        price: 150        
    }
];

const [tax, total] = taxesCalculator({

    products: shoppingCart,
    tax: 0.15
});


console.log(tax, total);