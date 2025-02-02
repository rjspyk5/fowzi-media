import React from 'react'
import { Hero } from '../../components/Hero/Hero'
import { Contact } from '../../components/Contact/Contact'
import { WhyUs } from '../../components/WhyUs/WhyUs'
import { About } from '../../components/About/About'
import { Features } from '../../components/Features/Features'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <About/>
        <WhyUs/>
       
        <Contact/>
    </div>
  )
}
