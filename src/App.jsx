import './App.css'
import Header from "../src/components/organism/Header"
import Footer from "../src/components/organism/Footer"
import Hero from './sections/Hero'
import Wave from './components/atoms/Wave'
import Product from './sections/Product'
import About from "../src/sections/About"
import Contact_us from './sections/Contact_us'

function App() {

  return (
    <>
      <Header/>
      <div className='relative top-12 sm:top-14'>
        <Hero />
        {/* <Wave/>
        <Product />
        <About/>
        <Contact_us /> */}
      </div>
      <Footer/>
    </>
  )
}

export default App
