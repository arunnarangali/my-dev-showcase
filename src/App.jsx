import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import HeroPage from "./pages/HeroPage"
// import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"
import FadeInSection from "./components/FadeInSection"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Experience from "./pages/Experience"

 

function App() {
 

  return (
    <>
     <Header />
     <FadeInSection>
      <HeroPage />
     </FadeInSection>
     <FadeInSection delay={100}>
      <AboutMe />
     </FadeInSection>
     <FadeInSection delay={250}>
      <Experience />
     </FadeInSection>
     <FadeInSection delay={200}>
      <Skills />
     </FadeInSection>
     {/* <FadeInSection delay={300}>
      <Portfolio />
     </FadeInSection> */}
     <FadeInSection delay={400}>
      <Contact />
     </FadeInSection>
     <Footer />
    </>
  )
}

export default App
