import './navBar.css';

function NavBar() {
    return (
      <div className="navbar">
        <div className="left-block">
            <p className="team-name">BrainGem</p>
        </div>
        <div className="right-block">
            <p className="navBarButton">Team</p>
            <p className="navBarButton">Deliverables</p>
            <p className="navBarButton">Concept</p>
            <p className="navBarButton">Contact</p>
        </div>
      </div>
    );
  }
  
  export default NavBar;