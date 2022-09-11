import {Fragment, useContext} from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";

export default function CategoriesPreview() {
    const {categoriesMap} = useContext(CategoriesContext)
    return (
        <Fragment>

            {
                // because it is an object
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview key={title} title={title} products={products}/>
                    )
                })
            }


        </Fragment>
    );
}