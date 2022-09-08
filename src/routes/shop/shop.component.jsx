import "./shop.styles.scss"
import {Routes, Route} from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component";

export default function Shop() {
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
        </Routes>
    );
}