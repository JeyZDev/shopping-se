import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

const MyCart = () => {
  const cartItem = useSelector((state) => state.carts);
  console.log("CART ITEM: ", cartItem);

  return (
    <div className="min-h-screen p-6 md:p-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-gray-900">My Cart</h1>

        {cartItem.length === 0 ? (
          <div className="text-center py-20 bg-[#1d232a] rounded-2xl border-2 border-dashed">
            <p className="text-xl text-gray-400">ไม่มีสินค้าในตะกร้า 🛒</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-5">
              {cartItem.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="lg:col-span-4 sticky top-10">
              <CartSummary items={cartItem} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
