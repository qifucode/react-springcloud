import * as React from "react"
import { Route,BrowserRouter } from "react-router-dom"
// import App from "../App"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

export default class AppRouter extends React.Component{
    public render(){
        return(
            <BrowserRouter>
                {/* <Route path="/" component={ App } /> */}
                <Route path="/login" component={ Login } />
                <Route path="/signup" component={ Signup } />
            </BrowserRouter>
        )
    }
}