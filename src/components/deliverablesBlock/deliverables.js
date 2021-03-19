import './deliverables.css';
import DeliverableBlock from './deliverableBlock'

function Deliverables() {
    return (
      <div id="deliverable" className="deliv">
          <h3 className="deliv-title">Deliverables</h3>
            <div className="block-container">
                <div className="del-block">
                  <h4 className="del-title">Opdracht van Living Labs Scheveningen:</h4>
                  <div className="del-left">
                    <p className="question">Hoe kan een slimme toepassing eruitzien, waarmee de leefomgeving en beleving van bewoners wordt verbeterd of verrijkt?</p>
                    <img className="theme" src={process.env.PUBLIC_URL + '/theme.png'} alt={'Deliverable'}/>
                </div>
              </div>
              <DeliverableBlock title={'Inzichten desk- en fieldresearch'} image={'o-inzichten.png'} />
          </div>
          <img className="divider-dash" src={process.env.PUBLIC_URL + '/dash-medium.png'} alt={'mediumdash'}/>
          <div className="block-container">
            <div className="del-block">
                  <h4 className="del-title">Onwerpopgave</h4>
                  <div className="del-left">
                    <p className="question">Hoe kunnen we de mens en natuur samen vreedzaam laten leven door middel van een slimme oplossing?</p>
                    <h4 className="del-title">Enquete onderzoek</h4>
                    <img className="graph" src={process.env.PUBLIC_URL + '/graph.png'} alt={'Deliverable'}/>
                </div>
              </div>
              <DeliverableBlock title={'Design Principles'} image={'designprinciples.png'} />
          </div>
      </div>
    );
  }
  
  export default Deliverables;