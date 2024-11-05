import Products from '../model/productSchema.js';
import cloudinary from 'cloudinary';
cloudinary.v2.config({
    cloud_name:"dv6yivx37",
    api_key:"621242358315299",
    api_secret:"iN9F4OJ5nuSlOs5nOtGk2K_7Wj0"
});

// Submit product for approval
import Product from '../model/productSchema.js';

export const submitForApproval = async (req, res) => {
  try {
    const productData = {
      ...req.body,
      status: "Pending",  // Ensure status matches schema default 'Pending' value
    };

    // Log product data to verify before saving
    console.log("Product data to save:", productData);

    const newProduct = new Product(productData);
    await newProduct.save();

    res.status(201).json({ message: "Product submitted for approval." });
  } catch (error) {
    console.error("Error in submitForApproval:", error);  // Log the exact error message
    res.status(500).json({ error: "Error submitting product for approval." });
  }
};


// Approve product
export const approveProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Products.findByIdAndUpdate(id, { status: "approved" });
    res.status(200).json({ message: "Product approved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error approving product." });
  }
};

// Reject product
export const rejectProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Products.findByIdAndDelete(id);
    res.status(200).json({ message: "Product rejected and removed." });
  } catch (error) {
    res.status(500).json({ error: "Error rejecting product." });
  }
};


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

export const addProduct = async (req, res) => {
  try {
      console.log("Request body:", req.body);
      console.log("Before Cloudinary upload"); 

      if (!req.files || !req.files.image) {
          console.log("No photo uploaded");
          return res.status(400).json({ success: false, message: "No photo uploaded" });
      }

      const file = req.files.image;

      cloudinary.uploader.upload(file.tempFilePath, async (result, err) => {
          console.log("Inside Cloudinary upload callback");

          if (err) {
              console.error("Cloudinary upload error:", err.message || err);
              return res.status(500).json({ success: false, message: "Cloudinary upload error" });
          }

          if (!result || !result.secure_url) {
              console.error("Unexpected Cloudinary response:", result);
              return res.status(500).json({ success: false, message: "Unexpected Cloudinary response" });
          }

          console.log("Cloudinary upload success. Image URL:", result.secure_url);
          
          const {
            id,
            shortTitle,
            longTitle,
            mrp,
            cost,
            discount,
            quantity,
            description,
            tagline,
          } = req.body;

          const newProduct = await Products.create({
              id,
              url: result.secure_url,
              detailUrl: result.secure_url,
              title: { shortTitle, longTitle },
              price: { mrp, cost, discount },
              quantity,
              description,
              tagline,
          });

          return res.status(200).json({
              success: true,
              newProduct,
          });
      });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await Products.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
