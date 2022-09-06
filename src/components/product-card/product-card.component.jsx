import "./product-card.styles.scss"
import Button from "../button/button.component";

export default function ProductCard() {
    return (
        <div className="product-card-container">
            <img/>
            <div className="footer">
                <span className="name"></span>
                <span className="price"></span>
            </div>
            <Button buttonType="inverted">Add to card</Button>
        </div>
    );
}