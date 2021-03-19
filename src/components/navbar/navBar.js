import './navBar.css';

import { slide as Menu } from 'react-burger-menu'
import DeviceIdentifier from 'react-device-identifier';

function NavBar() {
    return (
      <div className="navbar">
        <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt={'BrainGem Logo'}/>
        <div className="left-block">
            <p className="team-name">BrainGem</p>
        </div>
        <DeviceIdentifier isDesktop={true}>
          <div className="right-block">
              <a href="#about-team" className="navBarButton">Team</a>
              <a href="#deliverable" className="navBarButton">Deliverables</a>
              <a href="#concept" className="navBarButton">Concept</a>
              <a href="#contact" className="navBarButton">Contact</a>
          </div>
        </DeviceIdentifier>
        <DeviceIdentifier isMobile={true} isTablet={true}>
          <Menu right htmlClassName={"hamburger-menu"} >
              <a href="#about-team" className="navBarButton">Team</a>
              <a href="#deliverable" className="navBarButton">Deliverables</a>
              <a href="#concept" className="navBarButton">Concept</a>
              <a href="#contact" className="navBarButton">Contact</a>
          </Menu>
        </DeviceIdentifier>
      </div>
    );
  }
  
  export default NavBar;