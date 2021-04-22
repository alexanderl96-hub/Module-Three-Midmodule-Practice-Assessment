import React from "react"
import studentData from "./data/studentData.js"
import StudentsList from './Components/StudentsList.js'
import Rost from './Components/Rost.js'
import './App.css'
import Form from "./Components/Forms.js"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      students: studentData,
      enrolled: []
    }
    
  }
 
  handleData =(stood)=>{
    let enrolled = this.state.enrolled
    this.setState({
      enrolled: enrolled.concat(stood)
    })
  }
  

  render() {
    const { enrolled } = this.state
    let average = enrolled.reduce((a, b)=> a + b.GPA, 0) / enrolled.length
    return (
      <div className="App">
        <div className='object'>
          <h1>Build a Class</h1>
          <StudentsList handdle= {this.state.students} enrolR={this.handleData}/> 
        </div>
        <div>
         <Rost  enrolled={this.state.enrolled} average={average || 0}/>
         <Form  enrolledAmount={this.state.enrolled.length} average={average || 0}/>
        </div>
        
        
      </div>
    );
  
  }
}
export default App;
