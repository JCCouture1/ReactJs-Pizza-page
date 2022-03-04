import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../pages/styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Jeremiah's Pizza was found by the young CEO Iloh Jeremiah Chinonso, who in his local 
                area of residence saw the high demand of pizzas from people living around his environment 
                and the stress they go through before they could get one. He decided to build a website where 
                people could easily order pizzas from the comfort of their homes and get it delivered to them
                at their place of residence or choice. Thanks to our CEO Mr JEREMIAH for making this dream a reality.

            </p>
        </div>
      
    </div>
  )
}

export default About
