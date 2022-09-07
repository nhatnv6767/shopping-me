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

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        /* Filtering out the cartItemToRemove from the cartItems array. */
        // nếu cartItem.id không bằng id mà chúng ta đang cố gắng xoá, hãy giữ nguyên giá trị
        // chúng ta chỉ muốn xoá giá trị mà trong đó cartItem.id = với giá trị mà chúng ta đang cố gắng xoá
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )

    // return back cartitems with matching cart item with reduced quantity
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
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
    clearItemFromCart: () => {
    },
    cartCount: 0,
    cartTotal: 0,
})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal,
    }
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