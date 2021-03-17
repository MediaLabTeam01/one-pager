import './deliverables.css';
import DeliverableBlock from './deliverableBlock'

function Deliverables() {
    return (
      <div className="deliv">
          <h3 className="deliv-title">Deliverables</h3>
          <div className="block-container">
              <DeliverableBlock title={'Design Principles'} />
              <DeliverableBlock title={'Onderzoeks richtingen'} />
          </div>
      </div>
    );
  }
  
  export default Deliverables;