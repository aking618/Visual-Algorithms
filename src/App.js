import React, { useState } from 'react';
import DataBar from './components/DataBar';

function App() {
  const [data, setData] = useState([]);

  function GenerateData(numDataPoints){
    let arr = [];

    for(let i = 0; i < numDataPoints; i++){
      arr.push(<DataBar/>)
    }
    
    setData(arr);
  }

  return (
    <div className="container">
      <div className="inner">
        {data}
        <button onClick={() => GenerateData(10)}>Generate Mothafuckin Data</button>
      </div>
    </div>
  );
}

export default App;
