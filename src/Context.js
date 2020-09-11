import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) {
    return (
        <Context.Provider value={ 1 }>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}