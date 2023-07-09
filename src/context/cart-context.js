import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/cart-reducer";

const initialValue = {
    cuisineData : [],
    restaurantData: [],
    restaurantDataCopy: [],
    showData: []
}

export const DataContext = createContext(initialValue);

export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )   
}

