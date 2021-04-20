import React from 'react'


  const Students =({name, age, bio, image, gpa})=>{
    return(
        <div >
            <div className='display'>
                <h2>{name}</h2>
                <p>{age}</p>
                <img src={image}/>
                <p>{bio}</p>
                <p>{gpa}</p>
                <button>Add to Class</button>
            </div>
        </div>
      
        )
  }
 

export default Students