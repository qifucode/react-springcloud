"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
// import createSagaMiddleware from "redux-saga";
// redux-thunk可以将action变为异步的
var redux_thunk_1 = require("redux-thunk");
// import sagas from "../sagas/index";
var reducers_1 = require("../reducers");
// 创建saga中间件
// const sagaMiddleware = createSagaMiddleware();
// 将中间件挂载到store上
var store = redux_1.createStore(reducers_1["default"], redux_1.applyMiddleware(redux_thunk_1["default"]));
// 运行saga
// sagaMiddleware.run(sagas);
exports["default"] = store;
