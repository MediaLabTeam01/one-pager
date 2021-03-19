import './teamMemberBlock.css';

function teamMemberBlock(props) {
    return (
      <div className="tm-block">
          <img className="tm-image" src={process.env.PUBLIC_URL + '/logo.png'} alt={'BrainGem Logo'}/>
          <div className="tm-info">
            <p className="tm-name"> {props.name} </p>
            <p className="tm-course"> {props.course} </p>
          </div>
      </div>
    );
}

export default teamMemberBlock