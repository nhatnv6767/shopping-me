import {createContext, useState} from "react";

import PRODUCTS from "../shop-data.json"

export const ProductContext = createContext({
    products: [],
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS)
    /* Creating a new object with the key of products and the value of products. */
    const value = {products}
    return (
        <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
    )
}