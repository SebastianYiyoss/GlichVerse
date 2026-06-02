import React from 'react'
import { NavBar } from './components/NavBar'
import { ComicCard } from './components/ComicCard'
import { FooterCard } from './components/FooterCard'


export const App = () => {
  return (
    <>
        <NavBar/>
        <ComicCard/>
       <FooterCard/>
        
    </>
  )
}
