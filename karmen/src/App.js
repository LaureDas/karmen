
import './App.css';
import WelcomePage from './components/Welcome.js';
import Card from './components/Card.js';
import ContactContainer from './components/ContactContainer.js';
import Header from './components/Header.js';
import Block from './components/Block.js';
import TrioPage from './components/TrioPage.js';
import Integrations from './components/Integrations.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <WelcomePage/>
      <Card/>
      <Block/>
      <TrioPage/>
      <Integrations/>
      <Footer/>
      <ContactContainer/>
    </div>
    );
}

export default App;
