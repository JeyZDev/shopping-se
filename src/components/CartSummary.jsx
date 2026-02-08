const CartSummary = ({ items }) => {
  const subtotal = items.reduce((sum, item) => {
    const price = item.price ?? 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="bg-[#1d232a] rounded-xl border p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-medium">Order Summary</h2>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Subtotal</span>
        <span>฿{subtotal.toLocaleString()}</span>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Shipping</span>
        <span>ฟรี</span>
      </div>

      <hr />

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>฿{subtotal.toLocaleString()}</span>
      </div>

      <button
        className="w-full bg-[#1d232a] text-white py-3 rounded-xl
             hover:bg-[#15181c] transition"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
