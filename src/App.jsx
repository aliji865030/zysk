import React from 'react'
import Nav from './Components/Nav'
import HeroSection from './Components/HeroSection'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Blogs from './Components/Blogs'

const App = () => {
  return (
    <div className='w-screen py-8'>
      <Nav/>
      <HeroSection/>
      <Faq/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App
