import {createContext, useEffect, useReducer, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
}


const userReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null)
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const value = {currentUser, setCurrentUser}

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubcribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}