import { useState } from 'react'
import './App.css'
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
export default class App extends Component { // className based components
  render() {
    return (
     <>
     <Navbar/>
     <News/>

     
     </>
    )
  }
}

