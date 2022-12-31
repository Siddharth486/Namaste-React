import React from 'react';
import ReactDOM from 'react-dom/client'


const heading = React.createElement('h1', {}, "namaste ji")
const heading1 = React.createElement('h1', {}, "ram ram ji")
const heading2 = React.createElement('h1', {}, "har har mahadev ji")

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render([heading, heading1, heading2])

