import {createContext, useEffect, useState} from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    // if found, increment quantity
    if (existingCartItem) {
        /* Checking if the cartItem.id is equal to the productToAdd.id. If it is, it will return a new object with the
        cartItem and the quantity + 1. If it is not, it will return the cartItem. */
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    // return new array with modified cartItems/ new cart item

    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    removeItemFromCart: () => {
    },
    cartCount: 0,
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(addCartItem(cartItems, cartItemToRemove))
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

/*
product
{
id, name, price, imageUrl
}

CartItem
{
id, name, price, imageUrl, quantity
}
*/