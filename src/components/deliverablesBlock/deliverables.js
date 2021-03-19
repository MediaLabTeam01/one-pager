import './deliverables.css';
import DeliverableBlock from './deliverableBlock'

function Deliverables() {
    return (
      <div id="deliverable" className="deliv">
          <h3 className="deliv-title">Deliverables</h3>
          <div className="block-container">
              <DeliverableBlock title={'Design Principles'} image={'designprinciples.png'} />
              <DeliverableBlock title={'Onderzoeks richtingen'} image={'o-inzichten.png'} />
          </div>
      </div>
    );
  }
  
  export default Deliverables;