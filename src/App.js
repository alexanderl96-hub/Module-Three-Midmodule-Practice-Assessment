import React from "react"
import studentData from "./data/studentData.js"
import StudentsList from './Components/StudentsList.js'
import Rost from './Components/Rost.js'
import './App.css'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      students: studentData,
      enrolled: ''
    }
  }
 
  handleData =()=>{
    this.setState({
      enrolled: studentData
    })
  }
  

  render() {
    console.log(this.state.students)
    console.log(this.state.enrolled)
    return (
      <div className="App">
        
        <div className='object'>
          <StudentsList handleData= {studentData}/> 
        </div>
        <div>
         <Rost  enrolled={this.state.enrolled}/>
        </div>
        
        
      </div>
    );
  
  }
}
export default App;
