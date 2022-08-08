import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { useState, useContext, useEffect } from 'react';
import { Card, Filter, Pagination, Search, Navbar } from './components';


const App = () => {

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default App;
