import './conceptBlock.css';

function Concept() {
    return (
      <div id="concept" className="c-block">
         <img className="concepts" src={process.env.PUBLIC_URL + '/concepts.png'} alt={'Concepts'}/>
          <h3 className="c-title">Het concept</h3>
          <div className="c-content">
            <div className="block-container">
              <div className="c-blocks"> <p>Toelichting</p></div>
              <div className="c-blocks"> <p>Beeldmateriaal</p> </div>
            </div>
          </div>
      </div>
    );
  }
  
export default Concept;