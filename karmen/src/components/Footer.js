import React from 'react';
import sites from '../assets/sites.png';

const Footer = ()=>{
    return(
<div className="container6">
        <div className="block1">
        <br/><br/>
          <div className="headerc3">
          <li>Growth funding on your own terms </li>
            </div>
          <br/>
          <a href="" className="fund"> Get Started Now </a>
          <br/><br/>
        </div>
        <div className="footer">
          <div className="block1">
            OONI Logo
            <br/><br/>
            <br/>            Growth funding on your own terms.
            </div>
          <div className="block2">
            Elsewhere on the internet
            <br/>
            <img src={sites} className="img-socialmedia" alt=''></img>

          </div>

        </div>
      </div>
    )
}
export default Footer;

