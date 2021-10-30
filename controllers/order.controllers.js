const Order = require("../models/order.models");

const createOrder = async (req, res) => {
  // TODO fix in prod
  const newOrder = new Order({
    name: req.body.name,
    address: req.body.address,
    quantity: req.body.quantity,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
    user: req.body.user,
    isPaid: req.body.isPaid,
    paidAt: req.body.paidAt,
    isDelivered: req.body.isDelivered,
    deliveredAt: req.body.deliveredAt,
  });
  try {
    const savedOrder = await newOrder.save();
    return res.status(201).json({
      order: savedOrder,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};
const getOrder = async (req, res) => {
  const id = req.params.orderId;

  try {
    const order = await order.findById(id);
    return res.status(200).json({
      order: order,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};
const getOrders = async (req, res) => {
	try {
		const orders = await Order.find().limit(limit).sort("-PayedAt");

		return res.status(200).json({ orders: orders });
	} catch (err) {
		return res.status(500).json({ message: err });
	}
};

const updateOrder = async(req,res) =>{

	const id = req.params.orderId;
const data = { isDelivered: req.body.isDelivered,
deliveredAt: req.body.deliveredAt,
 };
 if(Order){
    Order.isPaid = true
    Order.paidAt = Date.now()}
// console.log('req.body in orderRouter put route:', req.body);
// console.log('order in orderRouter.put:', order);

// update order if exists 
try{
    const order = await Order.findById(id);
    if (order.Admin.toString() === req.verifiedUser._id) {
 
   const updatedOrder = await Order.findByIdAndUpdate(id, data, {
    new: true,
});
   return res.status(200).json({ message: 'Payment processed successfully',product: updatedProduct });

} else {
    res.status(403).json({ message: ' You are not a admin ' });}
    

}
catch (err)
{
return res.status(500).json({ message: err });
}


};

const deleteOrder = async (req, res) => {
	const id = req.params.OrderId;
	let deletedOrder = null;
	try {
		const order = await Order.findById(id);
		if (Order.User.toString() === req.verifiedUser._id) {
			deletedOrder = await Order.findByIdAndDelete(id);
		}

		return res.status(200).json({ order: deletedOrder });
	} 
catch (err) {
		return res.status(500).json({ message: err });
	}
};

  
module.exports.createOrder = createOrder;
module.exports.getOrder = getOrder;
module.exports.getOrders = getOrders;
module.exports.updateOrder = updateOrder;
module.exports.deleteOrder = deleteOrder;
