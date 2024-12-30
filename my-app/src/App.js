import logo from './logo.svg';
import Bio from './components/bio.js';
import Nav from './components/nav.js';
import Contact from './components/contact.js';
import Exp from './components/exp.js';
import Edu from './components/edu.js';
import './App.css';
import './styles.css'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Bio name = 'Rutuja'/>
      <Contact contactnumber = '2068619630' email = 'rutujm@uw.edu' mail = '4220 8th Ave NE'/>
      <Exp company1 = 'Persistent Systems Limited' company2 = 'Accenture'/>
      <Edu university = 'University of Washington' graduationby = 'Expected graduation: Aug 2026'  course = "Professional Master's in Electrical and Computer Engineering"/>
    </div>
  );
};

export default App;
