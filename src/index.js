import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AboutTeamMembers from './components/aboutTeamMembers/aboutTeamMembers'
import TopHeader from './components/topHeader/topHeader'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TopHeader />
    <AboutTeamMembers />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
