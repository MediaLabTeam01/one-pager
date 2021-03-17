import './navBar.css';

function NavBar() {
    return (
      <div className="right-logo">
          <img  className="logo" src={process.env.PUBLIC_URL + '/BG-Icon.png'} alt={'BrainGem Logo'} /> 
      </div>
    );
  }
  
  export default NavBar;