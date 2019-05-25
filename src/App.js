import React from 'react';
import logo from './logo.svg';
import './App.css';
import bankcontainer from './components/bank/bankcontainer';
import governmentcontainer from './components/government/governmentcontainer';
import home from './components/homepage';
import addbank from './components/bank/addbank';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
<BrowserRouter>
          <Switch>
              <Route path='/' exact component={home} />
              <Route path='/bank' exact component={bankcontainer} />
              <Route path='/government' exact component={governmentcontainer} />
              <Route path='/addbank' exact component={addbank} />
              
          </Switch>
      
      </BrowserRouter>
  );
}

export default App;
