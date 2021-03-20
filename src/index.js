import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet'
import './index.css';
import AboutTeamMembers from './components/aboutTeamMembers/aboutTeamMembers'
import NavBar from './components/navbar/navBar'
import Deliverables from './components/deliverablesBlock/deliverables'
import Concept from './components/conceptBlock/conceptBlock'
import Contact from './components/contact/contactBlock'
import Header from './components/header/header'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>BrainGem</title>
    </Helmet>
    <NavBar />
    <Header />
    <AboutTeamMembers />
    <img className="divider-dash" src={process.env.PUBLIC_URL + '/dash-dark.png'} alt={'darkdash'}/>
    <Deliverables />
    <img className="divider-wave" src={process.env.PUBLIC_URL + '/wave_light.png'} alt={'lightwave'}/>
    <Concept />
    <img className="divider-wave" src={process.env.PUBLIC_URL + '/wave_dark.png'} alt={'darkwave'}/>
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
