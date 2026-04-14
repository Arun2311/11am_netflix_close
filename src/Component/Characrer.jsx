import React, { useState } from 'react'




export default function Characrer() {

    const [anime, setanime] = useState(["luffy", "zoro", "sanji", "ussop"])



    return (
        <div>

            {/* {data.map()} */}

            {anime.map((da) => (

                <h1>{da}</h1>

            ))}


        </div>
    )
}
