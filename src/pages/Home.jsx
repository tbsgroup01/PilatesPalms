import React from 'react'
import Hero from '../components/Hero'
import PulseSection from '../components/PulseSection'
import Sanctuary from '../components/Sanctuary'
import RefinedPractice from '../components/RefinedPractice'
import Philosophy from '../components/Philosophy'
import Testimonials from '../components/Testimonials'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'



const Home = () => {
  return (
   <>
  <Hero />
  <PulseSection />
  <Sanctuary />
  <RefinedPractice />
  <Philosophy />
  <Testimonials />
  <FinalCTA />
  <Footer />
   </>
  )
}

export default Home