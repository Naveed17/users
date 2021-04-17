import React from 'react'
import './App.css';
import {Switch,Route} from "react-router-dom";
import Layout from './layouts/Layout';
import Home from './layouts/Home';

function App() {
  return (
   
      <Layout>
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
        </Layout>
      
  );
}

export default App;
