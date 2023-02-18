import './App.css';
import TextComponent from './Components/TextComponents/TextComponent';
import {question, paragraph} from './Components/TextComponents/Text.js';
import RatingComponent from './Components/Rating/RatingComponent';
import FinalComponent from './Components/FinalComponent/FinalComponent';
import { useState } from 'react';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const[submited, setSubmit] = useState(false);

  function handleComponentClick(id) {
    if(submited !== true) setActiveComponent(id);
    
  }
  function handleSubmit(){
    if(activeComponent !== null && submited !== true) setSubmit(true);
  }


    return(
      <div className="page-container">
        <div className="container">
        {!submited ?(
          <> 
            <TextComponent paragraph={paragraph} question={question}/>
            <RatingComponent onComponentClick={handleComponentClick} activeComponent={activeComponent} onSubmit={handleSubmit}/>
        </>
          ):(
            <FinalComponent activeComponent={activeComponent} submited={submited}/>
          )
        }
        </div>
      </div>
     
    )
        
  }


export default App;
