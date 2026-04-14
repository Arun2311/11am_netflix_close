import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function TodoList() {

    const [groccery, setgroccery] = useState("")
    const [grocerrylist, setgrocerrylist] = useState([])

    const handletodo = (e) => {
        setgroccery(e.target.value)
    }

    
    useEffect(() => {
               handleget()

    }, [])


    const handleget = async () => {
        let datas = await axios.get("http://localhost:3000/todoList")
        setgrocerrylist(datas.data)
    }


    const handleadd = async () => {
        let body = {
            task: groccery
        }
        let data = await axios.post("http://localhost:3000/todoList", body)
        // alert("data sent succfuly")

                       handleget()

    }


    const handledelete = async (id) => {
        let deletedata = await axios.delete("http://localhost:3000/todoList/" + id)
        handleget()
    }



    const handleedit = async (data) =>{

        let editeditem = prompt("edit data" ,data.task)

        let body = {
            task : editeditem
        }

        let editdata = await axios.put("http://localhost:3000/todoList/" +data.id ,body)


        handleget()

        
        

    }

    return (
        <div>
            <h1>TodoList </h1>
            <label>Groccery</label>
            <input onChange={handletodo} placeholder='enter u r list' />

            <button onClick={handleadd}>Submit</button>


            {grocerrylist.map((da) => (
                <div>

                    <h1>{da.task}</h1>

                    <button onClick={()=> handleedit(da)}>EDit</button>
                    <button onClick={() => handledelete(da.id)}>Delete</button>


                </div>
            ))}

        </div>
    )
}


