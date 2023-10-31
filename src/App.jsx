import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <ImageSlider/>
    <Body/>
    <Footer/>
    </>
  )
}

export default App
