import "./shop.styles.scss"
import {Routes, Route} from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {setCategoriesMap} from "../../store/categories/category.action";
import {useDispatch} from "react-redux";

export default function Shop() {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            dispatch(setCategoriesMap(categoryMap))
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