import { Component } from "react";
import DisPlay from "./Display";
class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {value : null,};
    }
    Value(nums) {
        this.setState({value : nums});
    }
    render() {
        return (
            <>
    <nav class="navbar">
        <ul class="nav-list">
        <li class="nav-item"> 
            <button  onClick={() =>this.Value('home')}>Home</button>
        </li>
        <li class="nav-item">
            <button  onClick={() =>this.Value('login')} >Login</button>
        </li>
        <li class="nav-item" >
            <button onClick={()=>this.Value('Register')}>Register</button>
        </li>
        </ul>
    </nav>
    <DisPlay buttonClicked={this.state.value}></DisPlay>
    </>
        );
    }
}
export default NavBar;