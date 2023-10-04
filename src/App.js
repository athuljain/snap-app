import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { myContext } from './Context';
import  {JsonDatas}  from './Components/Datas';
import './App.css';
import Home from './Components/Home';
import { useState } from 'react';
import JsonData from './Components/JsonData';
import FetchDatas from './Components/FetchDatas';
import SnapData from './Components/SnapData.json'
import JsonComponent from './Components/JsonComponent';



function App() {

 

  const [snap,setSnap] = useState(JsonDatas)
  const [json,setJson] = useState(SnapData)

  const values={
    snap,
    setSnap,
    json,
    setJson,
    

  }



  return (
    <div className="App">
     
      <BrowserRouter>
      <myContext.Provider value={values}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jsonDatas' element={<JsonData />} />
        <Route path='/fetch' element={<FetchDatas />} />
        <Route path='/json' element={<JsonComponent />} />
      </Routes>
      </myContext.Provider>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
