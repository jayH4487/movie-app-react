import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"

import App from './App'
import {ContextProvider} from "./Context"

ReactDOM.render(
    <ContextProvider>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </ContextProvider>,
    document.getElementById('root')
)
