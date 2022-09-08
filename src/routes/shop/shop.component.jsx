import {useContext} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss"

export default function Shop() {
    const {categoriesMap} = useContext(CategoriesContext)
    return (
        <>

            {
                Object.keys(categoriesMap).map(title => {
                    <>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {
                                categoriesMap[title].map((category) => (
                                    <ProductCard key={category.id} product={category}/>
                                ))
                            }
                        </div>
                    </>
                })
            }


        </>
    );
}