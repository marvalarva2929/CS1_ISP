import './App.css';
import Entry from './Components/Entry';
import Journal from './Components/Journal';
import Index from './Components/Index';
import { useState } from 'react';

const route = {}
const resetRoute = () => {
  route.curr = true;
}
resetRoute()
const path = window.location.pathname.replace(/\//, '')
let [action] = path.split('/')

function App() {

  const [currPage, setCurrPage] = useState(action !== 'journals');

  const updateRoute = () => {
    resetRoute()
    if (currPage) action = 'journals'
    else action = 'main'
    
    window.history.replaceState(null, null, `./${action}`)
  }

  const clickHandler = () => {
      setCurrPage(!currPage);
      updateRoute();

  }



  const e1 = (
    <Entry title = "2-Jan-2023   Click to Open">
      <h3>The 5 roles</h3>
      <p>
        The five roles are Software Developer, QA Engineer, Project Manager, Product Manager, and Release Engineer. 
        My personal suitability to begin a software developer is that I am very experienced in Programming and have made
        many projects before. I am confident in my abilities to be able to fix bugs and make efficient code for our team. 
      </p>
      <p>  
        My personal suitability to a QA Engineer (quality assurance engineer) is that I always try to do my best in everything,
        and I am somewhat of a perfectionist. However, a challenge I may face is trying to reconcile my own ideas with possibly
        contradicting ideas from other team members. I can overcome this problem by communicating with my team more.
      </p> 
      <p> 
        My personal suitability to a Project Manager is that I am good at looking at things from an outside perspective, so 
        managing a large project and making sure that everything is finished at the right time is not a big challenge for me. 
        However, sometimes I may find a challenge in making sure that every team member has their opinion heard, and to overcome that, 
        I can talk with my team beforehand to make sure that nobody is scared to share their ideas.
      </p>
      <p>
        My personal suitability to a project manager is that I can easily envision my ideas and creatively execute them. However,
        a challenge I may face is that sometimes I get lost in my own notions and forget the original purpose. To face this challenge,
        I can do my best to stay open-minded and communicate with my team.
      </p>
      <p>
        My personal suitability to a release engineer is that I am very experienced with software developement, so making sure source
        code is properly deployed will not be a challenge for me.
      </p>
      <h3>Technical Challenges</h3>
      <p>A Technical Challenge I faced was trying to get this website set up. It took a fair amount of effort and time trying to get my react application to run. </p>
      <h3>Scheduling Challenges</h3>
      <p>A scheduling challenge I faced was trying to get each member of our team set up with a role. Everyone had different ideas of what they wanted to do and we had to discuss together to make a decision. </p>
      <h3>Intrapersonal Challenges</h3>
      <p>An Interpersonal Challege that we faced is trying to come up with an idea for our game. We still havn't come up with an idea, but to face the challenge I intend to discuss with my team and try to reconcile all of our ideas. </p>
    </Entry>
  )

  let entrys = [];
  entrys.push(e1);

  return (
    <div className="App">
        <button className='App-Button' onClick={ () => clickHandler() }> {currPage ? 'Click to view the Journals' : 'Click to go back'} </button>
        {!currPage ? <Journal>{entrys}</Journal> : <Index></Index>}
    </div>
  );
}

export default App;
