import React from 'react'
import { Hero } from '../../components/Hero/Hero'
import { Contact } from '../../components/Contact/Contact'
import { WhyUs } from '../../components/WhyUs/WhyUs'
import { About } from '../../components/About/About'
import { Features } from '../../components/Features/Features'
import { Fade } from 'react-awesome-reveal'
import left from '../../assets//Ellipse 1.png'

export const Home = () => {
  return (
    <div className='relative'>
        <img src={left} className="absolute left-0 top-[-76px]" alt="" />
      <Fade><Hero/></Fade>
      <Fade><Features/></Fade>
      <Fade> <About/></Fade>
      <Fade><WhyUs/></Fade>
      <Fade><Contact/></Fade>
      
        
        
       
        
       
        
    </div>
  )
}
