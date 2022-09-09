import "./category.styles.scss"
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";


export default function Category() {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <div className="category-container">
            <h2 className="title">{category}</h2>
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
    );
}