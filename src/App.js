import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { myContext } from './Context';
import  {JsonDatas}  from './Components/Datas';
import './App.css';
import Home from './Components/Home';
import { useState } from 'react';
import JsonData from './Components/JsonData';
import FetchDatas from './Components/FetchDatas';






function App() {
  const [snap,setSnap] = useState(JsonDatas)

  const values={
    snap,
    setSnap,

  }



  return (
    <div className="App">
      <BrowserRouter>
      <myContext.Provider value={values}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jsonDatas' element={<JsonData />} />
        <Route path='/fetch' element={<FetchDatas />} />

      </Routes>
      </myContext.Provider>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
