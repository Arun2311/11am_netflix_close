import React, { useState } from 'react'

export default function MovieBook({name,rent,handleclick}) {


    const [data,setdata] = useState([2,4,3,32,32,3,4,3,423,3])

    

   
  return (
    <div>

        <h1>Movie Name : {name} </h1>
        <h2>Ticket  : {rent} </h2>

        <button onClick={()=>handleclick(data)}>Book</button>
      
    </div>
  )
}
