import React from 'react'
import Heading from '../common/heading/Heading'
import PriceCard from "../pricing/PriceCard"

const HomePrice = () => {
  return (
    <>
      <section className='hprice'>
       <Heading subtitle='our pricing' title='pricing and packages'/>
            <div className="price container grid">
                <PriceCard/>
        </div>
      </section>
    </>
  )
}

export default HomePrice
