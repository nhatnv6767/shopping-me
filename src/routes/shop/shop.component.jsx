import {useContext} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import "./shop.styles.scss"
import CategoryPreview from "../../components/category-preview/category-preview.component";

export default function Shop() {
    const {categoriesMap} = useContext(CategoriesContext)
    return (
        <div className="shop-container">

            {
                // because it is an object
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview key={title} title={title} products={products}/>
                    )
                })
            }


        </div>
    );
}