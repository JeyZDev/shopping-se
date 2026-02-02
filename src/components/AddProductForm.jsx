import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/products/action';

const AddProductForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: {error}} = useForm({
        title: "",
        category: "",
        imageUrl: "",
        price: "",
        available: ""
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
      <div className="grid gap-6 mb-6">
        <div>
          <label
            for="productName"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder=""
            required
          />
        </div>

        <div>
          <label
            for="first_name"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Category
          </label>
          <input
            type="text"
            id="first_name"
            class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder=""
            required
          />
        </div>

        <div>
          <label
            for="first_name"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Image Url
          </label>
          <input
            type="text"
            id="first_name"
            class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder=""
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              for="first_name"
              class="block mb-2.5 text-sm font-medium text-heading"
            >
              Price
            </label>
            <input
              type="text"
              id="first_name"
              class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder=""
              required
            />
          </div>

          <div>
            <label
              for="first_name"
              class="block mb-2.5 text-sm font-medium text-heading"
            >
              Quantity
            </label>
            <input
              type="text"
              id="first_name"
              class="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder=""
              required
            />
          </div>
        </div>
        <button type='submit' className="btn bg-primary text-white">Add Product</button>
      </div>
    </div>
  );
}

export default AddProductForm