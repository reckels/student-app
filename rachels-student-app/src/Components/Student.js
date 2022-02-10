import React, { Component } from 'react';
import './Student.css';

class Student extends Component {
    state = { }
    render() { 
        return (  
            <div className="student">
                <div className="name">
                    {this.props.student.name}
                </div>
                <img src={this.props.student.img} alt="student photo"/>
            </div>
        );
    }
}
 
export default Student ;