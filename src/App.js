import React from "react";
import { Switch, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
// import FirstSection from "./components/MainPage/FirstSection/FirstSection";
// import ClientsSection from "./components/MainPage/ClientsSection/ClientsSection";
// import SolutionsSection from "./components/MainPage/SoluionsSection/SolutionsSection";
// import TestimonialsSection from "./components/MainPage/TestimonialsSection/TestimonialsSection";
// import WorksSection from "./components/MainPage/WorksSection/WorksSection";
// import AboutSection from "./components/MainPage/AboutSection/AboutSection";
// import GetInTouchSection from "./components/MainPage/GetInTouchSection/GetInTouchSection";
import MainPage from "./components/MainPage/MainPage";
import ECommercePage from "./components/ECommercePage/ECommercePage";
import MainFooter from "./components/MainFooter/MainFooter";
import { useLocation } from "react-router-dom";
// import "./App.scss";

function App() {
  let style = {
   
// overflowX: useLocation().pathname !== "/"  ? "hidden" : "auto",
  };
  return (
    <div className="App" 
    style={style}>
      <MainHeader />
      <Switch>
      {/* <FirstSection />
      <ClientsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <WorksSection />
      <AboutSection />
      <GetInTouchSection /> */}
      <Route exact path="/" component={MainPage} />
     <Route exact path="/ecommerce" component={ECommercePage} />
      {/* <ECommercePage /> */}
      </Switch>
      <MainFooter />
    </div>
  );
}

export default App;
