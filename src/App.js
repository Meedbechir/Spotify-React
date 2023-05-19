import React from 'react';
import Sidebar from './components/Sidebar';
import Cards from './components/Cards';
import Header from './components/Header';
import './App.css'; // Import your custom CSS file for App component styles

const App = () => {
  return (
    <div className="app-container bg-gray">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-5 col-12">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-7 col-12">
          <div className="row">
            <div className="col">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
