import React from 'react'

const ProductCard = (props) => {
    const { id, productName, category, imageUrl, price, available } = props;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={imageUrl} alt={productName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{category}</p>
        <div className="">
          <p>{available}</p>
          <p>{price}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard