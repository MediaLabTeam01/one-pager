import './deliverables.css';
import DeliverableBlock from './deliverableBlock'
import DeviceIdentifier from 'react-device-identifier';

function Deliverables() {
    return (
      <div id="deliverable" className="deliv">
          <h3 className="deliv-title">Uitdaging</h3>
          <p className="challenge">Het natuurgebied rondom Scheveningen is uniek en het beschermen waard.
          Om de bezoekers van de duingebieden rond Scheveningen daar bewust van te maken zijn wij een concept gaan ontwikkelen.
          <br></br>
          <br></br>
          Hiervoor zijn we eerst onderzoek gaan doen. Zo zijn we het veld in gegaan, hebben we enquetes uitgezet en hebben we interviews met experts gehouden.
          Hieruit kwamen de onderstaande inzichten en design principles; </p>
          <h3 className="deliv-title">Onderzoek en Insights</h3>
            <div className="block-container">
                <div id="theme-block" className="del-block">
                  <h4 className="del-title">Opdracht van Living Labs Scheveningen:</h4>
                  <div className="del-left">
                    <p className="question">Hoe kan een slimme toepassing eruitzien, waarmee de leefomgeving en beleving van bewoners wordt verbeterd of verrijkt?</p>
                    <img className="theme" src={process.env.PUBLIC_URL + '/deliverables/theme.png'} alt={'Deliverable'}/>
                </div>
              </div>
              <DeliverableBlock title={'Inzichten desk- en fieldresearch'} image={'o-inzichten.png'} />
          </div>
        
          <img className="divider-dash" src={process.env.PUBLIC_URL + '/dividers/dash-medium.png'} alt={'mediumdash'}/>

          <div className="block-container">
            <div className="del-block">
                  <h4 className="del-title">Ontwerpopgave</h4>
                  <div id="graph-del" className="del-left">
                    <p className="question">Hoe kunnen we de mens en natuur samen vreedzaam laten leven door middel van een slimme oplossing?</p>
                    <h4 id="graph-title" className="del-title">Enquete onderzoek</h4>
                    <DeviceIdentifier isDesktop={true}>
                        <img className="graph" src={process.env.PUBLIC_URL + '/deliverables/graph.png'} alt={'Deliverable'}/>
                    </DeviceIdentifier>
                    <DeviceIdentifier isMobile={true}>
                      <div className="graph-block">
                          <img className="graph" src={process.env.PUBLIC_URL + '/deliverables/graph1.png'} alt={'Deliverable'}/>
                          <img className="graph" src={process.env.PUBLIC_URL + '/deliverables/graph2.png'} alt={'Deliverable'}/>
                      </div>
                    </DeviceIdentifier>
                </div>
              </div>
              <DeliverableBlock title={'Design Principles'} image={'designprinciples.png'} />
          </div>
      </div>
    );
  }
  
  export default Deliverables;