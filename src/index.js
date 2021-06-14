import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"
import reportWebVitals from './reportWebVitals';

import App from './App'

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)

reportWebVitals();