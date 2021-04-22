import React from 'react'
import Students from './Students'


const StudentsList =({handdle, enrolR})=> {
    
    return (
        <ul>
            {handdle.map((student)=>{
                return (
                    <Students key={student.id}
                    student={student}
                    enrolR={enrolR}/>

                )
            })}
        </ul>
    )
}
export default StudentsList
