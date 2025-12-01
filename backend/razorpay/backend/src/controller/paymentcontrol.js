const crypto=require('crypto')
const { createRazorpayInstance } = require('../config/razor.config');
const razorpayinstance = createRazorpayInstance();

exports.order = async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ error: "Amount is required" });
  }

  const options = {
    amount: amount * 100, // amount in paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`, // Unique ID for tracking
  };

  try {
    razorpayinstance.orders.create(options, (err, order) => {
      if (err) {
        console.error("Error creating Razorpay order:", err);
        return res.status(500).json({ success: false, error: err });
      }
      return res.status(200).json(order);
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Unexpected server error" });
  }
};


exports.verifypayment=async (req,res)=>{
    const{order_id,payment_id,signature}=req.body;

    if (!order_id || !payment_id || !signature) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      

    const secret=process.env.RAZOR_KEY;
    const hmac=crypto.createHmac("sha256",secret);
    hmac.update(order_id+"|"+payment_id);
    const genratedsign=hmac.digest("hex");
    if(genratedsign===signature){
        return res.status(200).json({success:"verified payment"})
    }
    else{
        return res.status(400).json({failure:"payment failed"})
    }
}
