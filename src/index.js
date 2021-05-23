import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/navigation';
import Topnav from './components/topnavbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Infoblocks from './components/infoblocks';
import Topsmallnav  from './components/topsmallnav';


ReactDOM.render(
  <React.StrictMode>
    <Topnav/>
    <span className="d-flex ">
      <Navigation />
      <span className="d-flex flex-column flex-grow-1">
            <Topsmallnav/>
            <Infoblocks/>
      </span>
        
    </span>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
