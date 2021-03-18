import './navBar.css';

function NavBar() {
    return (
      <div className="navbar">
        <div className="right-logo">
            <img  className="logo" src={process.env.PUBLIC_URL + '/BG-Icon.png'} alt={'BrainGem Logo'} /> 
        </div>
      </div>
    );
  }
  
  export default NavBar;