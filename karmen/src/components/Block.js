
import React from 'react';
import retail from'../assets/retail.png';
import saas from '../assets/saas.png';
import subs from '../assets/subs.png';
import ecom from '../assets/ecom.png';


const Block =()=>{
    const blocks= [
        {
            className:"block",
            img:ecom,
            title:"E-commerce"
        },
        {
            className:"block",
            img:saas,
            title:"SaaS",
        
        },
        {
            className:"block",
            img:retail,
            title:"Direct to Consumer online retail",
        },
        {
            className:"block",
            img:subs,
            title:"Subscriptions",
        }
    ]
    return(
        <div className="container3">
            <div className="headerc3">
            Who do we invest in?
            <li> 
            If your business is in one of these spaces, we'd love to speak to you.
            </li>
             </div>
             <div className="bigBlock">
        {blocks.map((eachblock, index) =>
        {
            return (
                
                    <div className={eachblock.className} key={index}>
                        <div className="small-div">
                            <img src={eachblock.img} className="img" alt=''></img>
                        </div>
                        <div className="big-div">
                            <br/>
                            <span className="div-title">
                            {eachblock.title}
                            </span>
                        </div>
                    </div>
                
            )})}
            </div>
        </div>
        )
    }

  export default Block;