import Products from '../model/productSchema.js';

export const getProducts = async(request,response) => {
     try {
       const products = await Products.find({});
         response.status(200).json(products);
     } catch (error) {
         response.status(500).json({message: "Error in Fetching Products" + error.message});     
     }
}

export const getProductById = async(request,response) => {
   try {
      const product = await Products.findOne({'id': request.params.id});
      response.status(200).json(product);
    }
    catch (error) {
      response.status(500).json({message: "Error in Fetching Product" + error.message});     
    }
}

