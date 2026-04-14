import MovieView from "./Component/MovieView"
import "./App.css"
import Counter from "./Component/Counter"
import Characrer from "./Component/Characrer"
import Animedetails from "./Component/Animedetails"
import ApiCallOne from "./Component/ApiCallOne"
import LifeCycle from "./Component/LifeCycle"
import { useState } from "react"
import UserForm from "./Component/UserForm"
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';



import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Component/Home"
import TodoList from "./Component/TodoList"
import MovieBook from "./Component/MovieBook"
import  CountProvider  from "./Component/context/CounterProvider"
import Card from "./Component/Card"


function App() {

  const [islog, setislog] = useState(true)

  const [moviedata, setmoviedata] = useState([
    {
      name: "inception",
      rent: 150
    },
    {
      name: "jailer",
      rent: 150
    },
    {
      name: "the prisioner",
      rent: 150
    },

  ])


  const handlelogout = () => {
    setislog(false)
  }

   const handleclick  =(nu)=>{


console.log(nu);

       
    }

  return (

    <div>

      {/* <TodoList /> */}
{/* 
      {moviedata.map((da)=>(

      <MovieBook handleclick={handleclick} name={da.name} rent={da.rent} />

      ))} */}

      <h1>dsdssd</h1>

      {/* <CountProvider>
          <Counter/>

          <Exampl/>

      </CountProvider> */}

     

          <Card/>






    </div>
    // <BrowserRouter>

    //   {/* <h1>Arun</h1> */}


    //   {/* <MovieView/> */}

    //   {/* <Counter/>

    //     // <Characrer/> */}

    //   <Link to="/">Home</Link>

    //   <Link to="/product">product</Link>

    //   <Link to="/about">about</Link>

    //   <Link to="/contact">contact</Link>

    //   <Link to="/a">A</Link>











    //   <Routes>


    //     <Route path="/" element={<Counter />} />

    //     <Route path="/product" element={<Animedetails />} />
    //     <Route path="/about" element={<UserForm />} />
    //     <Route path="/contact" element={<ApiCallOne />} />

    //             <Route path="/a" element={<Home />} />





    //   </Routes>

    //   {/* {islog ? <LifeCycle/>  : "u need login "} */}


    //   {/* <button onClick={handlelogout}>logout</button> */}




    // </BrowserRouter>
  )
}

export default App