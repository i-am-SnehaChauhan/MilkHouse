import {products} from './constants/data.js'
import Product from './model/productSchema.js'

const DefaultData = async () => {

    try{
        await Product.insertMany(products);
        console.log('Data inserted successfully');


    } catch(error){
        console.log('Error: Inserting Data');
    }

}

export default DefaultData;