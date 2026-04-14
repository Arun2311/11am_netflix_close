import React, { useState } from 'react'

var count = 0
export default function UserForm() {

    count  += 1
    
    console.log(count);
    

    const [name, setname] = useState("")
    const [phone, setphone] = useState("")

    const [email, setemail] = useState("")

    const [show, setshow] = useState(false)





    const handlname = (e) => {
        setname(e.target.value)
    }

    const handlephone = (e) => {
        setphone(e.target.value)

    }

    const handleemail = (e) => {
        setemail(e.target.value)

    }


    const handlesubmit = () => {
        setshow(true)
    }

    return (
        <div>


            {!show ? <div>

                <h1>User Form</h1>

                <input onChange={handlname} type='text' placeholder='Enter U r Name' />


                <br />
                <br />


                <input onChange={handlephone} type='text' placeholder='Enter U r phone' />
                <br />
                <br />


                <input onChange={handleemail} type='email' placeholder='Enter U r email' />





                <br />
                <br />

                <button onClick={handlesubmit}>Submit</button>

            </div> : null}



            {show ?
                <div>

                    <h2>Form Submitted</h2>

                    <h1>Name  :{name}</h1>
                    <h1>phone  :{phone}</h1>
                    <h1>email  :{email}</h1>


                </div>
                : null}


        </div>
    )
}
