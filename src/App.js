import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { myContext } from './Context';
import  {JsonDatas}  from './Components/Datas';
import {ShoeProducts} from './Components/ShoeProducts'
import './App.css';
import Home from './Components/Home';
import { useState } from 'react';
import JsonData from './Components/JsonData';
import FetchDatas from './Components/FetchDatas';
import SnapData from './Components/SnapData.json'
import JsonComponent from './Components/JsonComponent';
import Shoes from './Components/Shoes';
import Adidas from './Components/Adidas'; 
import Nike from './Components/Nike';


function App() {

 const data="kadavanthra"

  const [snap,setSnap] = useState(JsonDatas)
  const [json,setJson] = useState(SnapData)
  const [shoes,setShoes]=useState(ShoeProducts)


  const values={
    snap,
    setSnap,
    json,
    setJson,
    data,
    shoes,
    setShoes

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
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/nike' element={<Nike />} />
        <Route path='adidas' element={<Adidas /> } />
      </Routes>
      </myContext.Provider>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
