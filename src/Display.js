import { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
class DisPlay extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <h2>
            {this.props.buttonClicked === 'home' ? <Home/> : null}
            {this.props.buttonClicked === 'login' ? <Login/> : null}
            {this.props.buttonClicked === 'Register' ? <Register/> : null}
            
            </h2>
        );
    }
}
export default DisPlay;