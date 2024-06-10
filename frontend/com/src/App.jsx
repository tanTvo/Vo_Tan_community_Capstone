import { Button } from "@chakra-ui/button"
import { Container } from "@chakra-ui/react"
import React from 'react'
import {Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <Container maxW='620px'>
   <Routes >
    <Route path="/:username" element={<UserPage/>}/>
   </Routes>
    </Container>
  )
}

export default App
