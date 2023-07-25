import Products from '../model/productSchema.js';

export const getProducts = async(request,response) => {
     try {
       const products = await Products.find({});
         response.status(200).json(products);
     } catch (error) {
         response.status(500).json({message: "Error in Fetching Products" + error.message});     
     }
}