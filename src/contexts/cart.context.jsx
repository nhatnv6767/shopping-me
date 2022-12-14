import {createContext, useReducer} from "react";
import {createAction} from "../utils/reducer/reducer.utils";

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

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }
}


export const CartProvider = ({children}) => {

    const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch]
        = useReducer(cartReducer, INITIAL_STATE)
    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount,
            })
        )

    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }
    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemsReducer(newCartItems)
    }

    const setIsCartOpen = (bool) => {
        dispatch(
            createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
        )
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