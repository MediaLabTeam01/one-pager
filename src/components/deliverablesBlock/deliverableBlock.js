import './deliverables.css';

function DeliverableBlock(props) {
    return (
      <div className="del-block">
          <h4 className="del-title">{props.title}</h4>
          <div className="del"></div>
      </div>
    );
  }
  
  export default DeliverableBlock;