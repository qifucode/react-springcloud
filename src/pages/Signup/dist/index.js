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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
require("./index.less");
;
;
var layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
var tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};
var Signup = /** @class */ (function (_super) {
    __extends(Signup, _super);
    function Signup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
        // username:"", 
        // email:"",
        // password:"",
        // formDate:{}
        // isLoading:false,
        // invalid:true,
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    Signup.prototype.handleSubmit = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.state);
        }, 0);
    };
    ;
    Signup.prototype.back = function () {
        window.location.href = "/login";
    };
    ;
    Signup.prototype.render = function () {
        var _this = this;
        var onFinish = function (values) {
            // console.log('Success:', values);
            _this.setState(__assign({}, values));
        };
        var onFinishFailed = function (errorInfo) {
            console.log('Failed:', errorInfo);
        };
        return (React.createElement("div", { className: "signup" },
            React.createElement("h1", { className: "signup-title" }, "Input Signup Information"),
            React.createElement(antd_1.Form, __assign({ className: "login-form" }, layout, { name: "basic", onFinish: onFinish, onFinishFailed: onFinishFailed }),
                React.createElement(antd_1.Form.Item, { label: "Username", name: "username", rules: [{ required: true, message: 'Please input your username!' }] },
                    React.createElement(antd_1.Input, null)),
                React.createElement(antd_1.Form.Item, { name: "email", label: "E-mail", rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!'
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!'
                        },
                    ] },
                    React.createElement(antd_1.Input, null)),
                React.createElement(antd_1.Form.Item, { name: "password", label: "Password", rules: [
                        {
                            required: true,
                            message: 'Please input your password!'
                        },
                    ], hasFeedback: true },
                    React.createElement(antd_1.Input.Password, null)),
                React.createElement(antd_1.Form.Item, { name: "confirm", label: "Confirm Password", dependencies: ['password'], hasFeedback: true, rules: [
                        {
                            required: true,
                            message: 'Please confirm your password!'
                        },
                        function (_a) {
                            var getFieldValue = _a.getFieldValue;
                            return ({
                                validator: function (_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                }
                            });
                        },
                    ] },
                    React.createElement(antd_1.Input.Password, null)),
                React.createElement(antd_1.Form.Item, __assign({}, tailLayout),
                    React.createElement(antd_1.Button, { type: "primary", htmlType: "submit", onClick: this.handleSubmit }, "Submit"),
                    React.createElement(antd_1.Button, { className: "back", onClick: this.back }, "Back")))));
    };
    return Signup;
}(react_1.Component));
exports["default"] = Signup;
