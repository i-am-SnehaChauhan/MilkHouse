import Order from "../model/orderSchema.js";
export const getOrders = async(request,response) => {
    try {
      const orders = await Order.find({});
        response.status(200).json(orders);
    } catch (error) {
        response.status(500).json({message: "Error in Fetching Orders" + error.message});     
    }
}