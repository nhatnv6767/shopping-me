import {createContext, useEffect, useState} from "react";

import {addCollectionAndDocuments} from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    /* Creating a new object with the key of products and the value of products. */
    const value = {products}
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}