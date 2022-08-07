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
import Breaker from "./component/Breaker/Breaker";

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
      <div className="App">
        <Navbar navbarItems={navbarItems} />
        <PresentationSection />
        <Breaker numberOfBreakers={3} />
        <ClientsSection />
        <Breaker numberOfBreakers={3} />
        <ServicesSection />
        <Breaker numberOfBreakers={3} />
      </div>
      <StudyCreativitySection />
      <Breaker numberOfBreakers={3} />
      <div className="App">
        <ProjectsSection />
      </div>
      <StudyCreativitySection srcImage={3} reverseColumn />
      <Breaker numberOfBreakers={3} />
      <div className="App">
        <BlogStoriesSection />
      </div>
      <Breaker numberOfBreakers={3} />
      <WhatTheySaySection />
      <Breaker numberOfBreakers={3} />
      <div className="App">
        <Pricing />
      </div>
      <Breaker numberOfBreakers={3} />
      <GetInTouchSection />
      <Footer />
    </>
  );
}

export default App;
