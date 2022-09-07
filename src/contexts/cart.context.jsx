import {createContext, useState} from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: []
})

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

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const value = {isCartOpen, setIsCartOpen}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}