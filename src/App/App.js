import React from 'react'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import './App.css'

const App = ({children, location}) => {
  return (
    <div className="App">
      <Menu location={location.pathname} />
      {children}
      <Footer />
    </div>
  )
}

export default App
