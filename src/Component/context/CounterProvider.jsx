import { useState } from "react";
import { CounterContext } from "./createContext";


 const CountProvider = ({children})=>{

    const [count,setcount] = useState(10)

    const handleadd = () =>{
        setcount(count+1)
    }



    return(
        <CounterContext.Provider value={{count,handleadd}}>
            {children}

        </CounterContext.Provider>
    )

}

export default CountProvider