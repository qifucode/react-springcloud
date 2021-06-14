"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
// import App from "../App"
var Login_1 = require("../pages/Login");
var Signup_1 = require("../pages/Signup");
var AppRouter = /** @class */ (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppRouter.prototype.render = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Route, { path: "/login", component: Login_1["default"] }),
            React.createElement(react_router_dom_1.Route, { path: "/signup", component: Signup_1["default"] })));
    };
    return AppRouter;
}(React.Component));
exports["default"] = AppRouter;
