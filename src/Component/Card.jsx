import React, { useCallback, useContext, useMemo, useState } from "react";

function Counter() {




    const handleadd = useCallback(() =>{

    },[3])


    return (
        <div>
 

            <h1>Usememo</h1>




                        <h1>usecallback</h1>

                                                <h1>react memo</h1>


      
        </div>
    )
}

export default React.memo(Counter)