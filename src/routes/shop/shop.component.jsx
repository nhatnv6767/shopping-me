import "./shop.styles.scss"
import {Routes, Route} from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export default function Shop() {
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    }, [])
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
}