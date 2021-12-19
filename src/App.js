import React from 'react';
import DataBar from './components/DataBar';

function GenerateData(numDataPoints){
  let arr = []

  for(let i = 0; i < numDataPoints; i++){
    arr.push(<DataBar/>)
  }
  return(
    arr
  );
}

function App() {

  let arr = GenerateData(20);

  return (
    <div className="container">
      <div className="inner">
        {arr}
        <button onClick={GenerateData}>Generate Mothafuckin Data</button>
      </div>
      
    </div>
  );
}

export default App;
