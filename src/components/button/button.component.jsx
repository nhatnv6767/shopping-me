/*
default

inverted

google sign in

 */
import {BaseButton, GoogleSignInButton, InvertedButton} from "./button.styles"

const BUTTON_TYPES_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted"
}

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => (
    {
        [BUTTON_TYPES_CLASSES.base]: BaseButton,
        [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPES_CLASSES.inverted]: InvertedButton
    }[buttonType]
)

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