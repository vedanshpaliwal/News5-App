import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchResult from './components/SearchResult';
const App = () => {

  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/"> <News key="general" pagesize={15} country="in" category="general" /></Route>
          <Route exact path="/bussiness"> <News key="business" pagesize={15} country="in" category="business" /></Route>
          <Route exact path="/entertainment"> <News key="entertainment" pagesize={15} country="in" category="entertainment" /></Route>
          <Route exact path="/sports"> <News key="sports" pagesize={15} country="in" category="sports" /></Route>
          <Route exact path="/science"> <News key="science" pagesize={15} country="in" category="science" /></Route>
          <Route exact path="/technology"> <News key="technology" pagesize={15} country="in" category="technology" /></Route>
          <Route exact path="/health"> <News key="health" pagesize={15} country="in" category="health" /></Route>
          <Route exact path='/search/:query' > <SearchResult /></Route>



        </Switch>
      </Router>


      {/* hello my first class based com is here */}
    </div>
  )
}

export default App
