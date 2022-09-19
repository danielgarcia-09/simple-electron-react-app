import { useContext, useReducer } from "react"
import { ADD_ITEM_TO_CART, CLEAR_CART, DELETE_ITEM_FROM_CART } from "./actions";
import ShoppingContext from "./ShoppingContext"
import { ShoppingReducer } from "./ShoppingReducer";
import { v4 as uuid } from 'uuid'
import {articles} from '../data/data';

const initialState = {
    articles,
    cart: [ ]
}

export const useShopping = () => {
    return useContext(ShoppingContext);
}

export const ShoppingProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(ShoppingReducer, initialState);

    const addToCart = (item) => {
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: item
        })
    }

    const deleteFromCart = (item) => {
        dispatch({
            type: DELETE_ITEM_FROM_CART,
            payload: item
        })
    }

    const clearCart = () => {
        dispatch({
            type: CLEAR_CART,
        })
    }

    return (
        <ShoppingContext.Provider
            value={{
                addToCart,
                deleteFromCart,
                clearCart,
                ...state
            }}
        >
            {children}
        </ShoppingContext.Provider>
    )
}