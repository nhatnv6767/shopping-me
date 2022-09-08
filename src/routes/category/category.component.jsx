import "./category.styles.scss"
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {CategoriesContext} from "../../contexts/categories.context";


export default function Category() {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const products = categoriesMap[category]
    return (
        <div>Category</div>
    );
}