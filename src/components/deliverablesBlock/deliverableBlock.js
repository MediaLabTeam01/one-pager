import './deliverables.css';

function DeliverableBlock(props) {
    return (
      <div className="del-block">
          <h4 className="del-title">{props.title}</h4>
          <div className="del">
            <img className="del-image" src={process.env.PUBLIC_URL + '/' + props.image} alt={'Deliverable'}/>
          </div>
      </div>
    );
  }
  
  export default DeliverableBlock;