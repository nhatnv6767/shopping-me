/*
default

inverted

google sign in

 */
import "./button.styles"

const BUTTON_TYPES_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"
}

export default function Button({children, buttonType, ...otherProps}) {
    return (
        <button
            className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}