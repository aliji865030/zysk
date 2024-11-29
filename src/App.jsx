import React from 'react'
import Nav from './Components/Nav'
import HeroSection from './Components/HeroSection'
import Faq from './Components/Faq'
import Blog from './Components/blog'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-screen py-8'>
      <Nav/>
      <HeroSection/>
      <Faq/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
