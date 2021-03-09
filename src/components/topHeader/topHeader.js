import './topHeader.css';

function TopHeader() {
    return (
      <div className="top-header">
          <img  className="logo" src={process.env.PUBLIC_URL + '/BG-Icon.png'} alt={'BrainGem Logo'} /> 
          <h2> MediaLab SmartCity - Team 1 </h2>
      </div>
    );
  }
  
  export default TopHeader;