import React from 'react'

const Rost =({enrolled, average})=>{
    return(
        <div>
            <h1>Enrolled</h1>
            {/* <ul>
                {enrolled.map(choice => <li>{choice.name}:{choice.gpa}</li>)}
            </ul> */}
            <h3>Total Student Count:{enrolled}</h3>
            <h3>Average GPA: {average}</h3>
        </div>
    )
}
export default  Rost