import Order from "../model/orderSchema.js";
export const getOrders = async(request,response) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
    //    const formattedOrders = orders.map(order => ({
    //   ...order,
    //   createdAt: new Date(order.createdAt).toISOString().split('T')[0]
    // }));
        response.status(200).json(orders);
    } catch (error) {
        response.status(500).json({message: "Error in Fetching Orders" + error.message});     
    }
}