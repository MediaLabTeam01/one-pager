import './conceptBlock.css';

function Concept() {
    return (
      <div id="concept" className="c-block">
         <img className="concepts" src={process.env.PUBLIC_URL + '/concepts.png'} alt={'Concepts'}/>
          <h3 className="c-title">Het concept</h3>
          <div className="c-content">
            <div className="block-container">
              <div className="c-blocks"> 
                <p className="explanation">
                  De BinoculAR is een verrekijker die werkt met augmented reality. Met
                  deze verrekijker ziet de gebruiker de natuur op een heel andere
                  manier. Als de gebruiker door de verrekijker kijkt worden verschillende
                  details van de planten om hem heen zichtbaar. Ook projecteert de BinoculAR verschillende dieren die voorkomen in het gebied. Als de gebruiker een dier of plantensoort ziet waar hij meer van wil weten kan hij
                  deze scannen door er voor een paar seconden naar te kijken, en vervolgens verschijnt er meer informatie die door middel van augmented reality om het dier of de plant heen wordt geprojecteerd. Maar de dieren
                  bewegen wel, dit geeft een uitdaging het dier goed in zicht te krijgen
                  voor informatie
                </p>
              </div>
              <div className="c-blocks"> 
                <img className="c-image" src={process.env.PUBLIC_URL + '/concept/conceptImage.jpg'} alt={'Deliverable'}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
export default Concept;