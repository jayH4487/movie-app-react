import React from "react"

const Context = React.createContext()

function ContextProvider(props) {
    return (
        <Context.Provider value={9}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}