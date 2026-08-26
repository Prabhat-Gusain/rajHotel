import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import './App.css'

function App() {
  return(
    <>
      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Rooms/>
        <Location/>
        <Contact />
      </main>

      <WhatsAppButton />
      <Footer/>
    </>
  )
}

export default App
