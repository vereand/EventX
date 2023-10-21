import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Cards from './components/Cards'
import Ourapp from './components/Ourapp'
import Benefits from './components/Benefits'
import Login from './components/Login'
import Hero from './components/Hero'

const App = () => {
  
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Benefits></Benefits>
    <Ourapp></Ourapp>
    <Cards/>
    <Partners></Partners>
    <Login />
    </>
  )
}

export default App