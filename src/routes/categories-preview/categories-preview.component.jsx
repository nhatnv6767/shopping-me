import {Fragment} from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector";


export default function CategoriesPreview() {

    const categoriesMap = useSelector(selectCategoriesMap)

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