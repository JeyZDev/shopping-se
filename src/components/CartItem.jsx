import { useDispatch } from "react-redux";
import { decreaseQuantity } from "../redux/carts/Action";
import { addQuantity } from "../redux/products/Action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { id, title, category, quantity, price, imageUrl } = item;
  const handleRemoveItem = () => {
    dispatch(decreaseQuantity(id));
    dispatch(addQuantity(id, quantity));
  };
  const displayPrice = price ?? 0;

  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm flex gap-4 relative">
      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden border">
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
        <div className="flex items-center bg-gray-50 border border-gray-100 rounded-md overflow-hidden">
          <button className="px-2 py-1 hover:bg-gray-200 text-gray-400 transition" onClick={handleRemoveItem}>
            -
          </button>
          <span className="px-3 py-1 text-sm text-gray-600 border-x border-gray-100 bg-white min-w-[30px] text-center">
            {quantity}
          </span>
          <button className="px-2 py-1 hover:bg-gray-200 text-gray-400 transition">
            +
          </button>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-gray-400 text-sm font-light">
            ${(displayPrice * quantity).toLocaleString()}
          </p>
          <button className="text-gray-300 hover:text-red-500 transition text-lg">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
