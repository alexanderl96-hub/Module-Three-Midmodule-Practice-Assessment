import React from 'react'


  const Students =({student, enrolR})=>{

    const{name, age, bio, image, gpa} = student
    return(
        <div >
            <div className='display'>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <img src={image} alt="handdle"/>
                <p>Bio: {bio}</p>
                <p>GPA: {gpa}</p>
                <button onClick={()=> enrolR(student)}>Add to Class</button>
            </div>
        </div>
      
    )
  }
 

export default Students