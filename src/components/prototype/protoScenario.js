import './prototype.css';

function Scenario(props) {
    return (
        <div className="prototype-scenario">
             <h3 className="scenario-title">{props.title}</h3>
             <div className="scenario-row">
                <img className="proto-image" src={process.env.PUBLIC_URL + '/prototype/prototype_' + props.imagenr + '.jpeg'} alt={'Prototype'}/>
                <img className="proto-image" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 1) + '.jpeg'} alt={'Prototype'}/>
                <img className="proto-image" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 2) + '.jpeg'} alt={'Prototype'}/>
                <img className="proto-image" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 3) + '.jpeg'} alt={'Prototype'}/>
             </div>
             <div className="text-row">
                 <p className="description-text">{props.text1}</p>
                 <p className="description-text">{props.text2}</p>
                 <p className="description-text">{props.text3}</p>
                 <p className="description-text">{props.text4}</p>
             </div>
        </div>
    );
  }
  
  export default Scenario;