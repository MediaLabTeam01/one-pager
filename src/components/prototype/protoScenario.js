import './prototype.css';
import DeviceIdentifier from 'react-device-identifier';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Scenario(props) {
    if (props.title === "Scenario B") {
        return (
            <div className="prototype-scenario">
                <DeviceIdentifier isDesktop={true}>
                    <h3 className="scenario-title">{props.title}</h3>
                    <div className="scenario-row">
                        <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + props.imagenr + '.jpeg'} alt={'Prototype'}/>
                        <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 1) + '.jpeg'} alt={'Prototype'}/>
                        <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 2) + '.jpeg'} alt={'Prototype'}/>
                        <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 3) + '.jpeg'} alt={'Prototype'}/>
                        <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 4) + '.jpeg'} alt={'Prototype'}/>
                    </div>
                    <div className="text-row">
                        <p className="description-text-b">{props.text1}</p>
                        <p className="description-text-b">{props.text2}</p>
                        <p className="description-text-b">{props.text3}</p>
                        <p className="description-text-b">{props.text4}</p>
                        <p className="description-text-b">{props.text5}</p>
                    </div>
                </DeviceIdentifier>
                <DeviceIdentifier isMobile={true} isTablet={true}>
                    <h3 className="scenario-title">{props.title}</h3>
                    <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
                        <div>
                            <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + props.imagenr + '.jpeg'} alt={'Prototype'}/>
                            <p className="description-text-c">{props.text1}</p>
                        </div>
                        <div>
                            <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 1) + '.jpeg'} alt={'Prototype'}/>
                            <p className="description-text-c">{props.text2}</p>
                        </div>
                        <div>
                            <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 2) + '.jpeg'} alt={'Prototype'}/>
                            <p className="description-text-c">{props.text3}</p>
                        </div>
                        <div>
                            <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 3) + '.jpeg'} alt={'Prototype'}/>
                            <p className="description-text-c">{props.text4}</p>
                        </div>
                        <div>
                            <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 4) + '.jpeg'} alt={'Prototype'}/>
                            <p className="description-text-c">{props.text5}</p>
                        </div>
                    </Carousel>
                </DeviceIdentifier>
            </div>
        );
    }
    return (
        <div className="prototype-scenario">
            <DeviceIdentifier isDesktop={true}>
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
             </DeviceIdentifier>
             <DeviceIdentifier isMobile={true} isTablet={true}>
                    <h3 className="scenario-title">{props.title}</h3>
                    <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
                        <div>
                            <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + props.imagenr + '.jpeg'} alt={'Prototype'}/>
                            <p className="description-text-c">{props.text1}</p>
                        </div>
                        <div>
                            <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 1) + '.jpeg'} alt={'Prototype'}/>
                            <p className="description-text-c">{props.text2}</p>
                        </div>
                        <div>
                            <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 2) + '.jpeg'} alt={'Prototype'}/>
                            <p className="description-text-c">{props.text3}</p>
                        </div>
                        <div>
                            <img className="proto-image-b" src={process.env.PUBLIC_URL + '/prototype/prototype_' + (props.imagenr + 3) + '.jpeg'} alt={'Prototype'}/>
                            <p className="description-text-c">{props.text4}</p>
                        </div>
                    </Carousel>
                </DeviceIdentifier>
        </div>
    );
  }
  
  export default Scenario;