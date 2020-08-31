import React from 'react';
import './App.css';
import { boxesAtom } from "./Atom.js"
import { useRecoilState } from "recoil"
import Controller from "./Controller"
import Box from "./Box"

function App() {

  const [boxes, setBoxes] = useRecoilState(boxesAtom)
  
  function newBox (){
    
    setBoxes([...boxes, {}])
    console.log(boxes)
  }

  return (
    <div className="App">
      <div className="controllers">
          <h2>Controllers</h2>
          <button onClick={newBox}>Create New Box</button>
          <br/>
          <br/>
          {boxes.map((box, index) => <Controller key={`${box.color}-${index}`} id={index + 1}/>)}
      </div>
      <div className="boxes-container">
          <h2>Boxes</h2>
          <div className="boxes">
            {boxes.map((box, index) => <Box key={`${box.color}-${index}`} id={index + 1}/>)}
          </div>
      </div>
    </div>
  );
}

export default App;
