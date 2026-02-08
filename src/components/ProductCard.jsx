import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carts/Action.js";
import { removeQuantity } from "../redux/products/Action.js";

const ProductCard = (props) => {
  const { id, title, category, imageUrl, price, quantity } = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props));
    dispatch(removeQuantity(id));
    // console.log("CHECK:", props);
  };

  return (
    <div className="card bg-[#1d232a] w-full shadow-md hover:shadow-xl transition">
      <figure className="h-44 sm:h-48 md:h-52 bg-[#1d232a]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No Image
          </div>
        )}
      </figure>

      <div className="card-body p-4">
        <span className="badge badge-outline badge-sm w-fit">{category}</span>

        <h2 className="card-title text-sm sm:text-base line-clamp-2">
          {title}
        </h2>

        <p className="text-lg sm:text-xl font-semibold text-primary">
          ฿{price?.toLocaleString()}
        </p>

        <p className="text-xs sm:text-sm text-gray-500">
          คงเหลือ {quantity} ชิ้น
        </p>

        <div className="card-actions mt-2">
          <button
            className="btn btn-primary btn-sm w-full"
            onClick={handleAddToCart}
            disabled={quantity === 0}
          >
            {quantity === 0 ? "สินค้าหมด" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
