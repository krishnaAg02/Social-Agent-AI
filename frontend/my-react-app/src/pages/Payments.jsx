import { useParams } from "react-router-dom";

function Payments() {
  const { plan } = useParams();

  const planDetails = {
    starter: { name: "Starter", price: 0 },
    pro: { name: "Pro", price: 1499 },
    business: { name: "Business", price: 4999 },
  };

  const selectedPlan = planDetails[plan];

  if (!selectedPlan) return <p className="text-center mt-20 text-xl">Invalid plan selected.</p>;

  const handlePayment = () => {
    const options = {
    key: "YOUR_RAZORPAY_KEY",
    amount: selectedPlan.price * 100,
    currency: "INR",
    name: "Social.AI",
    description: `${selectedPlan.name} Plan Subscription`,
    handler: function (response) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
    },
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      <h1 className="text-4xl font-bold mb-4">Payment Page</h1>
      <div className="bg-white shadow-xl p-10 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-2">{selectedPlan.name} Plan</h2>
        <p className="text-lg mb-4">Price: ₹{selectedPlan.price}/month</p>
        <button
          onClick={handlePayment}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}

export default Payments;