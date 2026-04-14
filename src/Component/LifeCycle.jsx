import React, { useEffect } from 'react'

export default function LifeCycle() {


    useEffect(()=>{
        handlecheck()

        return ()=>{
            console.log("died");
            
        }
    },[])

    const handlecheck  = ()  =>{
        console.log(" luffy");

    }



  return (
    <div>

        {console.log("aaaaaaaaa")}

        <h1>Life Cycle</h1>
      
    </div>
  )
}
