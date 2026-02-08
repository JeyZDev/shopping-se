import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/carts/Action";
import { addQuantity, removeQuantity } from "../redux/products/Action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { id, productId, title, category, quantity, price, imageUrl } = item;
  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
    dispatch(addQuantity(productId, 1));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
    dispatch(removeQuantity(productId));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(id));
    dispatch(addQuantity(productId, quantity));
  };
  const displayPrice = price ?? 0;

  return (
    <div className="bg-[#1d232a] rounded-xl border p-4 shadow-sm flex gap-4 relative">
      <div className="w-24 h-24 flex-shrink-0 bg-[#1d232a] rounded-lg overflow-hidden border">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-2">
            No Image
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-start gap-1">
        <h3 className="font-bold text-gray-800 leading-tight">{title}</h3>
        <p className="text-sm text-gray-500">
          Price: ${displayPrice.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>

      <div className="flex flex-col justify-between items-end min-w-[100px]">
        <div className="flex items-center bg-[#23272f] border border-[#1d232a] rounded-md overflow-hidden">
          <button className="px-2 py-1 hover:bg-[#23272f] text-gray-400 transition" onClick={handleDecrease} disabled={quantity <= 1}>
            -
          </button>
          <span className="px-3 py-1 text-sm text-gray-600 border-x border-[#1d232a] bg-[#23272f] min-w-[30px] text-center">
            {quantity}
          </span>
          <button className="px-2 py-1 hover:bg-[#23272f] text-gray-400 transition" onClick={handleIncrease}>
            +
          </button>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-gray-400 text-sm font-light">
            ${(displayPrice * quantity).toLocaleString()}
          </p>
          <button className="text-gray-300 hover:text-red-500 transition text-lg" onClick={handleRemoveItem}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
