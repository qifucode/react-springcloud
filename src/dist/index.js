"use strict";
exports.__esModule = true;
// import React from 'react';
var react_dom_1 = require("react-dom");
var AppRouter_1 = require("./router/AppRouter");
require("./index.less");
var react_redux_1 = require("react-redux");
var store_1 = require("./store/store");
react_dom_1["default"].render(React.createElement(react_redux_1.Provider, { store: store_1["default"] },
    React.createElement(AppRouter_1["default"], null)), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
