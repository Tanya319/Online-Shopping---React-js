import React from 'react';
import './App.css';
import Home from './component/home';
import Upper from './component/upper';
import All from './component/all';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Collections from './component/collections';
import qalamkar from './images/slider1.png';
import qalamkar2 from './images/slider2.jpg';
import qalamkar3 from './images/slider3.png';
import qalamkar4 from './images/slider4.png';
import HSY from './Base/HSY';
import Deepak from './Base/deepak';
import Elan from './Base/elan';
import Faiza from './Base/faiza';
import Maria from './Base/maria';
import Nomi from './Base/nomi';
import Sania from './Base/sania';
import Teena from './Base/teena';
import Zainab from './Base/zainab';


function App() {
  return(
 <div className="App">
 <Router>
 <Home/>
 <Upper/>
 <div>
 <div className="uper_image" style={{width:20}} >
 <div className="space"></div>
 <div className="space1"></div>
 </div>

   <div id="slider">
   <figure>
   <div className="space1"></div>
   <img src={qalamkar} alt="festive20" para="luxury"/>
   <img src={qalamkar2} alt="festive20" para="luxury"/>
   <img src={qalamkar3} alt="festive20" para="luxury"/>
   <img src={qalamkar4} alt="festive20" para="luxury"/>
  </figure>
</div> 
</div>
 <Route path="/hsy" component={HSY}/>
 <Route path="/deepak" component={Deepak}/>
 <Route path="/elan" component={Elan}/>
 <Route path="/faiza" component={Faiza}/>
 <Route path="/maria" component={Maria}/>
 <Route path="/nomi" component={Nomi}/>
 <Route path="/sania" component={Sania}/>
 <Route path="/teena" component={Teena}/>
 <Route path="/zainab" component={Zainab}/>
 <Route path="/Home" component={Collections}/>
 <Route path="/all" component={All}/>
 </Router>
</div>
    ); 
}

export default App;
