import './prototype.css';
import Scenario from './protoScenario'

function Prototype() {
    return (
        <div className="prototype">
             <h3 className="proto-title">Het prototype</h3>
             <Scenario title={'Scenario A'} imagenr={1} 
             text1={'De BinoculAR staat gericht naar een stuk natuur toe'}
             text2={'Als je de BinoculAR gebruikt kan je rondkijken, je zit aan het stipje waar je precies naar kijkt'}
             text3={'Als de gebruiker naar een boom kijkt geeft het stipje een indicatie van hoelang je hiernaar moet kijken'}
             text4={'Zodra het laadbalkje vol is laat de binoculAR informatie in AR zien aan de gebruiker over deze plantensoort'}/>
             <Scenario title={'Scenario B'} imagenr={5}
             text1={'De BinoculAR staat gericht naar een stuk natuur toe. Vervolgens projecteerd hij een dier die in dit gebied voorkomt'}
             text2={'Deze dieren kunnen net als de planten gescant worden voor verdere informatie'}
             text3={'Alleen de dieren kunnen weglopen.'}
             text4={'Probeer het dier lang genoeg in het visier te houden om hem te scannen!'}
             text5={'Als dit is gelukt toont de BinoculAR verdere informatie over dit dier'}/>
             <h3 className="vid-title">Het prototype in actie!</h3>
             <div className="mvp-vid">
                <video src={process.env.PUBLIC_URL + '/prototype/mvp.mp4'} autoPlay muted>
                Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
  }
  
  export default Prototype;