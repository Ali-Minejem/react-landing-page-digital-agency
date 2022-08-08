import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import PresentationSection from "./component/PresentationSection/PresentationSection";
import ClientsSection from "./component/ClientsSection/ClientsSection";
import ServicesSection from "./component/ServicesSection/ServicesSection";
import StudyCreativitySection from "./component/StudyCreativitySection/StudyCreativitySection";
import ProjectsSection from "./component/ProjectsSection/ProjectsSection";
import BlogStoriesSection from "./component/BlogStoriesSection/BlogStoriesSection";
import WhatTheySaySection from "./component/WhatTheySaySection/WhatTheySaySection";
import Pricing from "./component/Pricing/Pricing";
import GetInTouchSection from "./component/GetInTouchSection/GetInTouchSection";
import Footer from "./component/Footer/Footer";

function App() {
  const navbarItems = [
    { id: "1", href: "#home", label: "Home" },
    { id: "2", href: "#services", label: "Services" },
    { id: "3", href: "#projects", label: "Projects" },
    { id: "4", href: "#blog", label: "Blog" },
    { id: "5", href: "#pricing", label: "Pricing" },
    { id: "6", href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <Navbar navbarItems={navbarItems} />

      <div className="App" id="home">
        <PresentationSection />
        <ClientsSection />
        <ServicesSection />
      </div>
      <StudyCreativitySection />
      <div className="App">
        <ProjectsSection />
      </div>
      <StudyCreativitySection srcImage={2} reverseColumn />
      <div className="App">
        <BlogStoriesSection />
      </div>
      <WhatTheySaySection />
      <div className="App">
        <Pricing />
      </div>
      <GetInTouchSection />
      <Footer />
    </>
  );
}

export default App;
