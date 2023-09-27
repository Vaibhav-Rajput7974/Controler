import { Component } from "react";

class Home extends Component{
    constructor(props){
        super(props);
        this.props={name : "home"}
    }
    render() {
        return (
            <div>
                Home Page 
            </div>
        );
    }
}
export default Home;