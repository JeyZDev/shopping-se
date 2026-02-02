import React from 'react'
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import AddProductForm from '../components/AddProductForm';

const Home = () => {
  const product = useSelector((state) => state.products);
  return (
    <div className="grid grid-cols-3 xl:px-30 xl:py-20 p-10 gap-10">
      <div className="col-span-2 grid xl:grid-cols-2 md:grid-cols-1 gap-4 sm:grid-cols-1">
        {product &&
          product.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.productName}
              category={item.category}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
      </div>
      <div className="col-span-1 card">
        <AddProductForm />
      </div>
    </div>
  );
}

export default Home