import React, { useContext, useState } from "react";
import { CounterContext } from "./context/createContext";

function Counter() {

    const {count,handleadd} = useContext(CounterContext)



    return (
        <div>
            <h1>Counter : {count}</h1>

            <button onClick={handleadd}>Add</button>
        </div>
    )
}

export default Counter