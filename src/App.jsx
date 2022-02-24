
import Header from "./components/header";
import Footer from "./components/footer";
import ContactMe2 from "./sections/ContactMe2";

import AboutMeSection from "./sections/AboutMeSection.jsx";
import ResumeSection from "./sections/ResumeSection.jsx";
import PortfolioSection from "./sections/PortfolioSection.jsx";
// import ContactSection from "./sections/ContactSection.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <AboutMeSection />
        <ResumeSection />
        <PortfolioSection />
        {/* <ContactSection /> */}
        <ContactMe2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
