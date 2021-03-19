import './navBar.css';

function NavBar() {
    return (
      <div className="navbar">
        <div className="left-block">
            <p className="team-name">BrainGem</p>
        </div>
        <div className="right-block">
            <a href="#about-team" className="navBarButton">Team</a>
            <a href="#deliverable" className="navBarButton">Deliverables</a>
            <a href="#concept" className="navBarButton">Concept</a>
            <a href="#contact" className="navBarButton">Contact</a>
        </div>
      </div>
    );
  }
  
  export default NavBar;