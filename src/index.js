import React from "react";
import ReactDOM from "react-dom";

/* Import App Component */
import App from "./App.js"

// Import Bootstrap (was installed with "npm install bootstrap --save")
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
    <App />,
    document.getElementById("root")
)