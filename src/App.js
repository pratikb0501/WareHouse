import React from "react";
import './App.css';
import Details from "./components/Details";
import Fulldetails from "./components/FullDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import FullDetails from "./components/FullDetails";
import EditDetails from './components/EditDetails';


function App() {

  return (
    <Router>
      <div >
        <Switch >
          <Route path='/' exact component={Details} />
          <Route path='/:id' exact component={FullDetails} />
          <Route path='/:id/edit' component={EditDetails} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
