import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/products/Action';

const AddProductForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: {error}} = useForm({
        title: "",
        category: "",
        imageUrl: "",
        price: "",
        quantity: ""
    })

    const onSubmit = (data) => {
        dispatch(addProduct(data));
        reset();
    }
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-4">
      <h1 className="text-center text-2xl font-semibold mb-5">
        Add new Product
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 mb-6">
        <div>
          <label htmlFor="title" className="block mb-2.5 text-sm font-medium">
            Product Name
          </label>
          <input
            id="title"
            type="text"
            {...register('title', { required: true })}
            className="rounded-lg border w-full px-3 py-2.5"
          />
        </div>

        <div>
          <label htmlFor="category" className="block mb-2.5 text-sm font-medium">
            Category
          </label>
          <select
            id="category"
            {...register('category', { required: true })}
            className="rounded-lg border w-full px-3 py-2.5 bg-white"
          >
            <option value="">-- เลือกหมวดหมู่ --</option>
            <option value="food">อาหาร</option>
            <option value="travel">ท่องเที่ยว</option>
            <option value="tech">เทคโนโลยี</option>
            <option value="other">อื่น ๆ</option>
          </select>
        </div>

        <div>
          <label htmlFor="imageUrl" className="block mb-2.5 text-sm font-medium">
            Image Url
          </label>
          <input
            id="imageUrl"
            type="text"
            {...register('imageUrl', { required: true })}
            className="rounded-lg border w-full px-3 py-2.5"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block mb-2.5 text-sm font-medium">
              Price
            </label>
            <input
              id="price"
              type="number"
              {...register('price', { required: true })}
              className="rounded-lg border w-full px-3 py-2.5"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block mb-2.5 text-sm font-medium">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              {...register('quantity', { required: true })}
              className="rounded-lg border w-full px-3 py-2.5"
            />
          </div>
        </div>

        <button type="submit" className="btn bg-primary text-white">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm