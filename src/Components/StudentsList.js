import React from 'react'
import Students from './Students'

export default function StudentsList(props) {
    const { handleData } = props
    const count = handleData.map((stood, i)=>{
        return <Students 
        key= {i}
        name= {stood.name}
        age= {stood.age}
        bio= {stood.bio}
        image= {stood.image}
        gpa= {stood.GPA}/>

    }) 
    
    return (
        <div>
            {/* <Students passing={props.stood}/> */}
            {count}
        </div>
    )
}
