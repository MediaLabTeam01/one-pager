import './header.css';

function Header() {
    return (
      <div className="header">  
            <img className="header-image" src={process.env.PUBLIC_URL + '/header.png'} alt={'Header'}/>
            <p className="title">Wij designen voor een schoner en gezonder Scheveningen</p>
      </div>
    );
  }
  
  export default Header;