import React from "react";

class Hello extends React.Component {
    render(){
        return <div>Hello {this.props.firstName} {this.props.lastName} from the hello.js file</div>;
    }
}

export default Hello;