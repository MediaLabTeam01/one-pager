import './aboutTeamMembers.css';
import TeamMemberBlock from '../teamMemberBlock/teamMemberBlock'

function AboutTeamMembers() {
    return (
      <div className="atm">
          <h3 className="atm-title">Ontmoet het team</h3>
          <div className="block-container">
              <TeamMemberBlock name={'Dion'} course={'CMGT'} />
              <TeamMemberBlock name={'Kalle'} course={'CMD'}/>
              <TeamMemberBlock name={'Iris'} course={'CMD'}/>
              <TeamMemberBlock name={'Wessel'} course={'CMGT'}/>
          </div>
      </div>
    );
  }
  
  export default AboutTeamMembers;