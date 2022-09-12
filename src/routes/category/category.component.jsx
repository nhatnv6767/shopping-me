import "./category.styles.scss"
import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector";


export default function Category() {
    const {category} = useParams()
    console.log("render/re-rendering category component")
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        console.log("Effect fired calling setProducts")
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {
                    products &&
                    products.length &&
                    products.map(product =>
                        <ProductCard
                            key={product.id}
                            product={product}/>
                    )
                }
            </div>
        </Fragment>

    );
}