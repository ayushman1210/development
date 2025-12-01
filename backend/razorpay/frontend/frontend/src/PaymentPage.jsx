import React from "react";
import axios from "axios";

const PaymentPage = () => {
  const handlePayment = async () => {
    try {
      // 1. Create order on backend
      const orderRes = await axios.post("http://localhost:5000/api/v1/createOrder", {
        event: "Test Item",
        amount: 100,
      });

      const { id: order_id, currency, amount } = orderRes.data;

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "My Razorpay Store",
        description: "Buy One Item",
        order_id,
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

          const verifyRes = await axios.post("http://localhost:5000/api/v1/verifypayment", {
            order_id: razorpay_order_id,
            payment_id: razorpay_payment_id,
            signature: razorpay_signature,
          });

          if (verifyRes.data.success) {
            alert("✅ Payment verified successfully!");
          } else {
            alert("❌ Payment verification failed.");
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Buy Item for ₹100</h1>
      <button onClick={handlePayment} style={{ padding: "10px 20px", fontSize: "18px" }}>
        Pay ₹100
      </button>
    </div>
  );
};

export default PaymentPage;
