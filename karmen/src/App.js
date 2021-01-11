
import './App.css';
import logo from './assets/logo.jpg';
import lp1 from './assets/lp1.png';
import lp2 from './assets/lp2.png';
import lp3 from './assets/lp3.png';
import retail from'./assets/retail.png';
import saas from './assets/saas.png';
import subs from './assets/subs.png';
import ecom from './assets/ecom.png';


const Header = () =>{
  return(
    <div className='header'>
      <span className='header-title'>
        OONI
      </span>
      <div> About us </div>
      <div> Use Cases </div>
      <div> Services </div>
      <div> Contact </div>
    
      <br/>
      <a href="" className="button-header"> Sign In </a>
    </div>
     
  );
}


const WelcomePage =(props) =>{
  return(
    <div className={props.className}>
      <div className="big-div">
        <span className="intro-title">
          Get up to
          <br/>
          <span className="million">
          $1m
          </span>
          <br/>
          for 
          <br/>
          your online
          <br/>
          business
          <br/>
        </span>
        <a href="" className="fund">Fund me</a>
      </div>
    </div>
  )
}
const Card = (props)=> {
  return (
    <div className={props.className}>
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt=''></img>
      </div>
      <div className="big-div">
        <span className="div-title">
          {props.title}
        </span>
        <br/>
        <span>
          {props.descriptions}
        </span>
      </div>
    </div>
  )
}
const Block =(props)=>{
  return(
    <div className={props.className}>
      <div className="small-div">
        <img src={props.img} alt=''></img>
      </div>
      <div className="big-div">
        <br/>
        <span className="div-title">
          {props.title}
        </span>
      </div>
    </div>
  )
}

const Trio =(props)=>{
  return(
    <div className={props.className}>
    <div className="big-div">
      <br/>
      <span className="div-title">
        {props.title}
      </span>
      <ul className="div-subtitle">
        {props.p1}<br/>
        {props.p2}<br/>
        {props.p3}<br/>
        {props.p4}<br/>
        {props.p5}<br/>
      </ul>
      <div className="fund">
        {props.fund}
      </div>
    </div>
  </div>
  )
}
const ContactContainer = () => {
  return(
      <div className='contact-container bg-grey'>
          <span className="div-title">Contact us</span>
          <div className='contact-form'>
              <div id='sect1'>
                  <span>Contact us and we will get back to you within 24 hours.</span>
                  <span>
                      <i className="fas fa-map-marker-alt"></i>
                      Karmen Paris
                  </span>
                  <span>
                      <i className="fas fa-mobile-alt"></i>
                      +33 6
                  </span>
                  <span>
                      <i className="far fa-envelope"></i>
                      karmen.gmail.com
                  </span>
              </div>
                  
              <div id='sect2'>
                  <span>
                      Contact
                  </span>

                  <input type="text" placeholder="email address" className="input-field"/>
                  <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                  <button className="contact-btn">Send</button>
              </div>
          </div>
      </div>
  );

}
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
      <WelcomePage
        className= "intro-section"
      />
      </div>
      <div className="container2">
      <Card
        className="section"
        img={lp1}
        title='Flexible'
        descriptions='Investments from £10,000 to £1,000,000'
        />
         <Card
        className="section"
        img={lp2}
        title='Fast'
        descriptions='Apply in minutes and get a decision within days!'
        />
        <Card
        className="section"
        img={lp3}
        title='Fair'
        descriptions='No equity loss or personal guarantee. Just a flat fee repaid from your revenue'
        />
      </div>
      <div className="container3">
        <div className="headerc3">
          Who do we invest in?
          <li> 
          If your business is in one of these spaces, we'd love to speak to you.
          </li>
        </div>
        <div className="bigBlock">
        <Block
        className="block"
        img={ecom}
        title="E-commerce"
        />
        <Block
        className="block"
        img={saas}
        title="SaaS"
        />
         <Block
        className="block"
        img={retail}
        title="Direct to Consumer online retail"
        />
         <Block
        className="block"
        img={subs}
        title="Subscriptions"
        />
        </div>
      </div>
      <div className="container4">
        <div className="headerc3">
          A fairer, faster way to fund
          <li>Ditch dilution and skip the pitch, we're the fairer, faster way to grow your company.</li>
        </div>
        <div className="container2">
        <Trio
        className="section"
        title="Bank Loan"
        p1="Personal Guarantee Required"
        p2="Apply and close in 3-6 months"
        p3="High compounding interest"
        p4="Negotiate a new loan"
        p5="Lots of documentation"/>
         <Trio
        className="section"
        title="OONI"
        p1="No equity dilution. No Personal Guarantee"
        p2="
        Apply and close in days"
        p3="
        Flat fee paid back as you earn"
        p4="Just request more funds"
        p5="Connect your data sources
        in seconds"
        fund="Get funding"/>
         <Trio
        className="section"
        title="Venture Capital"
        p1="Equity Dilution"
        p2="
        Apply and close in 3-6 months"
        p3="VC has liquidity preference"
        p4="Negotiate a new round"
        p5="Pitch and documentation"
        />
      
      </div>
     
      </div>
      <ContactContainer/>

    
    </div>
  );
}

export default App;
