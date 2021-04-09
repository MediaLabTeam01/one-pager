import './contactBlock.css';

function Contact() {
    return (
      <div id="contact" className="con-block">
          <h3 className="con-title">Meer weten?</h3>
          <div className="con-content">
            Voor een volledig overzicht van al ons onderzoek, ons gehele creative proces en de verdere achtergrond van het concept, bekijk ons Miro bord! 
            Hier is ons gehele proces per week vastgelegd en terug te lezen.
            <br></br>
            <br></br>
            <a className='moreLink' href="https://miro.com/app/board/o9J_lUcek6k=/">Naar het bord</a>
          </div>
      </div>
    );
  }
  
export default Contact;