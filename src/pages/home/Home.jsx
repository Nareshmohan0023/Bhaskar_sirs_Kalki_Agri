import React from 'react'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Aim from '../../components/aim/Aim'
import ReachOut from '../../components/reachout/ReachOut'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Aim/>
        <ReachOut/>
    </div>
  )
}

export default Home