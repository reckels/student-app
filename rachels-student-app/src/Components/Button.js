import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    state = {  }
    render() { 
        return (  
            <div className="button">
                <button onClick={this.props.handleClicked}>Pick Student</button>
            </div>
        );
    }
}
 
export default Button ;