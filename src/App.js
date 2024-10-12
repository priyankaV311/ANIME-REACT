import React from "react";
// import Popular from "./components/Popular";
import { useGlobalContext } from "./context/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./components/AnimeItem";
import HomePage from "./components/HomePage";
import Gallery from './components/Gallery'

function App() {
  const global = useGlobalContext();
  console.log(global);

  return (

    <BrowserRouter>
      {/* <div className='App'>
      <Popular/>
    </div> */}
      <Routes>
        {/* <Route path='/' element={<Popular />} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/anime/:id' element={<AnimeItem />} />
<Route path="/character/:id" element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>

  )
}


export default App