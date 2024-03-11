import React from 'react'
import Header from './components/Header'
import Services from './components/Services'
import About from './components/About'
import Clientscounter from './components/Clientscounter'
import ChooseUs from './components/ChooseUs'
import ClientReviews from './components/ClientReviews'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Header />
      <Services />
      <About />
      <Clientscounter />
      <ChooseUs />
      <ClientReviews />
      <Footer />
    </main >
  )
}

export default App