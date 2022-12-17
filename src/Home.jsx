import React from 'react'
import Footerone from './components/Footerone';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Stats from './components/Stats';

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero/>
        <Stats/>
        <Footerone/>
    </div>
  )
}

export default Home;