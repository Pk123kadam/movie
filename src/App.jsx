import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Display from './components/display/Display'
import DisplayData from './components/display/DisplayData'
import "bootstrap-icons/font/bootstrap-icons.css"
import Description from './components/Description/Description'
import Form from './components/form/Form'

function App() {


  return (
    <>
      <Provider store={store
      }>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path='/' element={<DisplayData></DisplayData>}></Route>
            <Route path='/form/:id' element={<Form></Form>}></Route>
            <Route path='/description/:id' element={<Description></Description>}></Route>







          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
