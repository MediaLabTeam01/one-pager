import './navBar.css';

import { slide as Menu } from 'react-burger-menu'
import DeviceIdentifier from 'react-device-identifier';

function NavBar() {
    return (
      <div className="navbar">
        <div className="left-block">
            <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt={'BrainGem Logo'}/>
            <p className="team-name">BrainGem</p>
        </div>
        <DeviceIdentifier isDesktop={true}>
          <div className="right-block">
              <a href="#about-team" className="navBarButton">Team</a>
              <a href="#deliverable" className="navBarButton">Deliverables</a>
              <a href="#concept" className="navBarButton">Concept</a>
              <a href="#contact" className="navBarButton">Meer</a>
          </div>
        </DeviceIdentifier>
        <DeviceIdentifier isMobile={true}>
            <Menu right={true} htmlClassName={"hamburger-menu"} >
                <a href="#about-team" className="navBarButton">Team</a>
                <a href="#deliverable" className="navBarButton">Deliverables</a>
                <a href="#concept" className="navBarButton">Concept</a>
                <a href="#contact" className="navBarButton">Meer</a>
            </Menu>
        </DeviceIdentifier>
      </div>
    );
  }
  
  export default NavBar;