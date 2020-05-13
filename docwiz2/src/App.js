import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navigator from "./Navbar";
import Login from "./Login";
import SignUp from "./Signup";
import PersistentDrawerLeft from "./SideNav";
import Dash from "./UserDash";
import About from "./About";
import AbDoc from "./AbDoc";
import BrainTA from "./BrainTA";

import Heart from "./Heart";
import Alzheimer from "./Alzheimer";
import Diabetes from "./Diabetes";
import MalariaA from "./MalariaA";
import LiverD from "./LiverD";
import Card from "./CardD";
import Lowerback from "./Lowerback";


import BrainTumour from "./braintumourdet";
import detecth from "./detecth";
import DetectLowerBack from "./detectlower";
import detectdiab from "./detectdiab";
import Malaria from "./malariadet";
import DetectLiver from "./detectliver";
import detectalzh from "./detectalzh";
import detectbrc from "./detectbrcancer";
import detectcardio from "./detectcardio";
import GAW1 from "./mapheart";
import GAW2 from "./mapdiab";
import GAW3 from "./mapbraintumour";
import GAW4 from "./mapliver";
import GAW5 from "./mapalzh";
import GAW6 from "./mapcardio";
import GAW7 from "./maplower";
import GAW8 from "./mapmalaria";
import GAW9 from "./nodisease";
import TransitionsExample from "./docwiz";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Login" component={Login} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/SideNav" component={PersistentDrawerLeft} />
          <Route path="/UserDash" component={Dash} />
          <Route path="/About" component={About} />
          <Route path="/AbDoc" component={AbDoc} />
          <Route path="/BrainTA" component={BrainTA} />
          <Route path="/MalariaA" component={MalariaA} />
          <Route path ="LiverD" component={LiverD} />
          <Route path="Card" component={Card} />
          <Route path="Lowerback" component={Lowerback} />

          <Route path="/Diabetes" component={Diabetes}/>

          <Route path="/Heart" component={Heart} />
          <Route path="/Alzheimer" component={Alzheimer} />
          <Route path="/docwiz" component={TransitionsExample} />
          <Route path="/detectcardio" component={detectcardio} />
          <Route path="/braintumourdet" component={BrainTumour} />
          <Route path="/detecth" component={detecth} />
          <Route path="/detectalzh" component={detectalzh} />
          <Route path="/malariadet" component={Malaria} />
          <Route path="/detectdiab" component={detectdiab} />
          <Route path="/detectbrc" component={detectbrc} />
          <Route path="/detectlower" component={DetectLowerBack} />
          <Route path="/detectliver" component={DetectLiver} />

          <Route path="/mapdiab" component={GAW2} />
          <Route path="/mapheart" component={GAW1} />
          <Route path="/mapbraintumour" component={GAW3} />
          <Route path="/mapmalaria" component={GAW8} />
          <Route path="/mapliver" component={GAW4} />
          <Route path="/mapalzh" component={GAW5} />
          <Route path="/mapcardio" component={GAW6} />
          <Route path="/nodisease" component={GAW9} />
          <Route path="/maplower" component={GAW7} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
