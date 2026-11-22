import React from 'react'
import HeroSection from './herosection'
import MissionNewsSection from './missionnews.jsx'
import PrincipalMessage from './principalmssg.jsx'
import Courses from './Courses.jsx'
import FeaturesFacilities from './features.jsx'
useSEO('Photo Gallery', 'Explore campus photos, labs, sports events, and student life at MMIT Hariharpur, Gorakhpur.');
const Home = () => {
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
