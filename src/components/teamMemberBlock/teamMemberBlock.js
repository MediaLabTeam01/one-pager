import './teamMemberBlock.css';

function teamMemberBlock(props) {
  if (props.name === "Wessel") {
    return (
      <div className="tm-block">
          <img className="tm-image" src={process.env.PUBLIC_URL + '/teamMembers/' + props.name + '.jpeg'} alt={props.name}/>
          <div className="tm-info">
            <p className="tm-name"> {props.name} </p>
            <p className="tm-course"> {props.course} </p>
          </div>
      </div>
    );
  }
    return (
      <div className="tm-block">
          <img className="tm-image" src={process.env.PUBLIC_URL + '/teamMembers/' + props.name + '.jpg'} alt={props.name}/>
          <div className="tm-info">
            <p className="tm-name"> {props.name} </p>
            <p className="tm-course"> {props.course} </p>
          </div>
      </div>
    );
}

export default teamMemberBlock