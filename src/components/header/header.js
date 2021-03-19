import './header.css';

function Header() {
    return (
      <div className="header">  
            <img className="header-image" src={process.env.PUBLIC_URL + '/header.png'} alt={'Header'}/>
            <p className="title">Wij designen voor een schoner <br></br> en gezonder <span className="scheveningen"> Scheveningen</span></p>
      </div>
    );
  }
  
  export default Header;