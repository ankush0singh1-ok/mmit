import React from 'react'
import HeroSection from './herosection'
import MissionNewsSection from './missionnews.jsx'
import PrincipalMessage from './principalmssg.jsx'
import Courses from './Courses.jsx'
import FeaturesFacilities from './features.jsx'
import useSEO from '../hook/useSEO.js' 
const Home = () => {
  useSEO('Photo Gallery', 'Explore campus photos, labs, sports events, and student life at MMIT Hariharpur, Gorakhpur.');
  return (<>
    <HeroSection/>
    <MissionNewsSection/>
    <PrincipalMessage/>
    <Courses/>
    <FeaturesFacilities/>
    </>
  )
}

export default Home
