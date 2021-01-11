import React from 'react';
import ints from '../assets/integrations.png';

const Integrations=()=>{
    return(
        <div className="container3">
        <div className="headerc3">
           We integrate with...
           <br/><br/>
            <li> 
            We integrate securely with the tools you use everyday
  to understand your business like no-one else.
            </li>
          <br/>
          <img src={ints} className="img-ints" alt=''></img>
          <br/>
          <br/>
          <li>
           And many more...
          </li> 
          </div>
          </div>
    )
}

export default Integrations