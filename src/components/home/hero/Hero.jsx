import React from 'react'
import Heading from '../../common/heading/Heading'
import "./Hero.css"

const Hero = () => {
  return (
    <>
     <section className='hero'>
        <div className="container">
            <div className="row">
                <Heading subtitle="WELCOME TO ACADEMIA" title="Best Online Eductaion"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus soluta obcaecati veritatis similique recusandae velit enim reprehenderit illo quam cupiditate doloremque, dolorum eos eum consequatur incidunt dolores libero iste error.</p>
            <div className="button">
                <button className="primary-btn">
                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button className="primary-btn">
                    VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
            </div>
        </div>
     </section>
     
     <div className="margin">
        
     </div>
    </>
  )
}

export default Hero
