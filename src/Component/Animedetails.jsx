import React, { useState } from 'react'

let datas  = [

        { name: "onepiece", rating: 10 },
        { name: "Naruto", rating: 9.5 },
        { name: "bleach", rating: 9.2 },
        { name: "AOT", rating: 9.4 },
        { name: "Vinland saga", rating: 9.3 },

    ]

export default function Animedetails() {

    const [details, setdetails] = useState(datas)


    return (
        <div>
            <h1>Anime Info</h1>

            {details.map((data)=>(
                <div>
                    <h1>Name : {data.name} </h1>
                    <h2>Rating :{data.rating}  </h2>


                    </div>
            ))}

        </div>
    )
}
