import React, { useState } from 'react';
import Data from './component/Data';
import Count from './component/Count';
import BasicInput from './component/Input';
import './App.css';

const App=()=>{
  const [IsVisible,setIsVisible]= useState(false);
  const [IsCount,setCount] = useState(0);
  const setVisiblility=()=>{
    setIsVisible(!IsVisible);
  }
  const countUpdate=()=>{
    setCount(IsCount+1);
  }
  return(
    <>
      <div className="display-content">
        <h1 className="heading">React Assignment 1</h1>
        <Data visible={IsVisible} setvisible={setVisiblility} countUpdate={countUpdate}/>
        <Count countChange={IsCount}></Count>
        <BasicInput/>
      </div>
    </>
  )
}

export default App;