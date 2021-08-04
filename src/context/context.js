import react, { createContext, useReducer } from "react";
import reducer from './reducer'

let initialState = {
    transations:[]
};

export let Context = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    function addTransation(transation) {
        dispatch({
            type: "ADD",
            payload: transation
        })
    }
    function deleteHistory(obj) {
          console.log(obj)
        dispatch({
            type: "REMOVE_HISTORY",
            payload: obj
        })
       
    }

    return (
        <Context.Provider value={{
            transations: state.transations,
            addTransation: addTransation,
            deleteHistory: deleteHistory
        }}>
            {children}
        </Context.Provider>
    )
}

