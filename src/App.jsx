import React from 'react'
import Nav from './Components/Nav'
import HeroSection from './Components/HeroSection'
import Faq from './Components/Faq'
import Blog from './Components/blog'

const App = () => {
  return (
    <div className='w-screen py-8'>
      <Nav/>
      <HeroSection/>
      <Faq/>
      <Blog/>
    </div>
  )
}

export default App
