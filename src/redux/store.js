import { configureStore } from "@reduxjs/toolkit";
import PageReducer from "./pages/PageReducer";
import ProductReducer from "./products/ProductReducer";
import CartReducer from "./carts/CartReducer";

export const store = configureStore({
    reducer: {
        pages: PageReducer,
        products: ProductReducer,
        carts: CartReducer
    },
    devTools: true
});