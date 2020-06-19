import React from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import FirstSection from "./components/FirstSection/FirstSection";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import SolutionsSection from "./components/SoluionsSection/SolutionsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import WorksSection from "./components/WorksSection/WorksSection";
import AboutSection from "./components/AboutSection/AboutSection";
import GetInTouchSection from "./components/GetInTouchSection/GetInTouchSection";
import MainFooter from "./components/MainFooter/MainFooter";
// import "./App.scss";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <FirstSection />
      <ClientsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <WorksSection />
      <AboutSection />
      <GetInTouchSection />
      <MainFooter />
    </div>
  );
}

export default App;
