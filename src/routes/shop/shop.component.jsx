import "./shop.styles.scss"
import {Routes, Route} from "react-router-dom"
import CategoryPreview from "../../components/category-preview/category-preview.component";

export default function Shop() {
    return (
        <Routes>
            <Route index element={<CategoryPreview/>}/>
        </Routes>
    );
}