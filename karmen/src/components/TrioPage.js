import React from 'react';

const TrioPage =()=>{

  const trios = [
    {
      className:"section-tr",
      title:"Bank Loan",
      p1:"Personal Guarantee Required",
      p2:"Apply and close in 3-6 months",
      p3:"High compounding interest",
      p4:"Negotiate a new loan",
      p5:"Lots of documentation"
    },
    {
      className:"section-tr-ooni",
      title:"OONI",
      p1:"No equity dilution. No Personal Guarantee",
      p2:"Apply and close in days",
      p3:"Flat fee paid back as you earn",
      p4:"Just request more funds",
      p5:"Connect your data sources in seconds",
      fund:"Get funding",
    },
    { 
      className:"section-tr",
      title:"Venture Capital",
      p1:"Equity Dilution",
      p2:"Apply and close in 3-6 months",
      p3:"VC has liquidity preference",
      p4:"Negotiate a new round",
      p5:"Pitch and documentation",
     }
  ]     
    return(
      <div className="container4">
        <div className="headerc3">
          A fairer, faster way to fund
          <li>Ditch dilution and skip the pitch, we're the fairer, faster way to grow your company.</li>
        </div>
        <div className="container2">
          {trios.map((eachtrio, index)=>{
            return(
            <div className={eachtrio.className} key={index}>
              <div className="big-div">
                <br/>
                <span className="div-title">
                  {eachtrio.title}
                </span>
              <ul className="div-subtitle">
                <br/>
              {eachtrio.p1}<br/><br/>
              {eachtrio.p2}<br/><br/>
              {eachtrio.p3}<br/><br/>
              {eachtrio.p4}<br/><br/>
              {eachtrio.p5}<br/><br/>
               </ul>
              <br/><br/>
              <a href="" className="fund">
              {eachtrio.fund}
               </a>
            </div>
          </div>
          )})}    
      </div>
    </div>
    )
  }
  

  export default TrioPage;