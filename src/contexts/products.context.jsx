import {createContext, useEffect, useState} from "react";

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: [],
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap)
        }
        getCategoriesMap()
    }, [])
    /* Creating a new object with the key of products and the value of products. */
    const value = {products}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}