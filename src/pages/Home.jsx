import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import AddProductForm from "../components/AddProductForm";

const Home = () => {
  const products = useSelector((state) => state.products);
  // console.log("PRODUCT: ", products);
  return (
    <div className="grid grid-cols-3 xl:px-30 xl:py-20 p-10 gap-10">
      <div className="grid col-span-2 grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="col-span-1 card">
        <AddProductForm />
      </div>
    </div>
  );
};

export default Home;
