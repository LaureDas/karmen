import React from 'react';
import lp1 from '../assets/lp1.png';
import lp2 from '../assets/lp2.png';
import lp3 from '../assets/lp3.png';

const Card = ()=> {
    const cards=
    [{
        className: "section", 
        img:lp1, 
        title:"Flexible", 
        descriptions:"Investments from £10,000 to £1,000,000"
    },
    {
        className:"section",
        img:lp2,
        title:'Fast',
        descriptions:'Apply in minutes and get a decision within days!'
    },
    {
        className:"section",
        img:lp3,
        title:'Fair',
        descriptions:'No equity loss or personal guarantee. Just a flat fee repaid from your revenue'
    }]
    return (
        <div className= "container2">
        {cards.map((eachcard, index)=>{
            return(
                <div className={eachcard.className} key={index}>
                 <div className="small-div">
                 <i className={eachcard.className} key={index}></i>
                 
                 <img src={eachcard.img} className="img" alt='' key={index}></img>
                </div>
                <div className="big-div">
                <span className="div-title">
                {eachcard.title}
          </span>
          <br/>
          <span>
            {eachcard.descriptions}
          </span>
        </div>
      </div>)})}
      </div>
    )
  }
  export default Card;