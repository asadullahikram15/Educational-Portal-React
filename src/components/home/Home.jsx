import React from 'react'
import AboutCard from '../about/AboutCard'
import Hero from './hero/Hero'
import HomeAbout from './HomeAbout'
import HomeBlogs from './HomeBlogs'
import HomePrice from './HomePrice'
import Testimonial from './testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutCard/>
      <HomeAbout/>
      <Testimonial/>
      <HomeBlogs/>
      <HomePrice/>
    </div>
  )
}

export default Home
