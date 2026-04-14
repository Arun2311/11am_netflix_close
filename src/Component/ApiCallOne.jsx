import React, { useEffect, useState } from 'react'

export default function ApiCallOne() {
    const [apidata, setapidata] = useState([])

    const [count,setcount] = useState(0)


    useEffect(()=>{
        handlefetch()
    },[])

    const handlefetch = async () => {
        let datas = await fetch("https://fakestoreapi.com/products")
        let res = await datas.json()
        console.log("Arun");
        setapidata(res)
    }


    const handleadd = () =>{
setcount(count+1)
    }


    return (
        <div>

            <h1>Count -{count} </h1>

            <button onClick={handleadd}>add</button>

            
            {apidata.map((da) => (
                <div>
                    <h2>{da.title}</h2>
                    <img src={da.image} height="200px" width="200px" />
                    <h3>{da.price}</h3>
                </div>

            ))}
        </div>
    )
}
