import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Newscard from "./Homepage"
import Potter from "./potter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Newscard/>
    <Potter/>
  </React.StrictMode>
);
