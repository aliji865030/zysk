import React from 'react'
import Nav from './Components/Nav'
import HeroSection from './Components/HeroSection'
import Faq from './Components/Faq'

const App = () => {
  return (
    <div className='w-screen py-8'>
      <Nav/>
      <HeroSection/>
      <Faq/>
    </div>
  )
}

export default App
