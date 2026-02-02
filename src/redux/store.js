import { configureStore } from "@reduxjs/toolkit";
import PageReducer from "./pages/PageReducer";
import ProductReducer from "./products/ProductReducer";

export const store = configureStore({
    reducer: {
        pages: PageReducer,
        products: ProductReducer
    },
    devTools: true
});