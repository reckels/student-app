import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <label className="switch">
                    <input type="checkbox" onClick={this.props.handleToggled}/>
                    <span className="slider round"></span>
                </label>
            </div>
        );
    }
}
 
export default Toggle ;