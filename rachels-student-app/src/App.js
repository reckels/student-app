import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';
import Toggle from './Components/Toggle';
import Student from './Components/Student';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      students: [
        {name: 'Bob Ross', img: 'https://media.giphy.com/media/rYEAkYihZsyWs/giphy.gif'},
        {name: 'Mr Rogers', img: 'https://media.giphy.com/media/x0npYExCGOZeo/giphy.gif'},
        {name: 'Carrie Fisher', img: 'https://media.giphy.com/media/CXU8axmXoPHUY/giphy.gif'}
      ],
      pickFromAll: true,
      pickedStudent: null,

    }
  }

  pickRandomStudent = () => {
    if(this.state.pickFromAll){
      this.setState(() => ({
        pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
      }))
    }
    else {
      const index = this.state.students.indexOf(this.state.pickedStudent);
      this.state.students.splice(index,1);
      if(this.state.students.length>0){
        this.setState(() => ({
          pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
        }))
      }  
      else {
        this.setState(() => ({
          pickedStudent: null
        }))
      }
    }
  }

  togglePickingStrategy = () => {
    this.setState((prevState) => ({
      pickFromAll: !prevState
    }))
  }

  render(){
    return (
      <div className="App">
        <Student student={this.state.pickedStudent===null ? '' : this.state.pickedStudent}/>
        <Button handleClicked={this.pickRandomStudent}/>
        <Toggle handleToggled={this.togglePickingStrategy}/>
      </div>
    );
  }

}

export default App;
