import React from "react";
import Popular from "./components/Popular";
import { useGlobalContext } from "./context/global";
import { BrowserRouter } from 'react-router-dom';

function App() {
  const global = useGlobalContext();
  console.log(global);
  
  return (
    
    // <div className='App'>
    //   <Popular/>

    // </div>

    
  <BrowserRouter>
<div className='App'>

      <Popular/>

    </div>
    </BrowserRouter>
  
  )
}


export default App