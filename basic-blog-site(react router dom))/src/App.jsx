import { Outlet } from "react-router-dom"
import { Header,Footer, Home } from "./components"
import React from "react"
function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
