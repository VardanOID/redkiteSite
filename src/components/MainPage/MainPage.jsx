import React, { useEffect } from "react";
import TopIDToScroll from "../common/TopIDToScroll/";
import FirstSection from "../common/VideoSection/";
import ClientsSection from "../common/ClientsSection/";
import SolutionsSection from "../common/SolutionsSection/SolutionsSection";
import TestimonialsSection from "../common/TestimonialsSection/";
import WorksSection from "../common/WorksSection/";
import AboutSection from "../common/AboutSection/";
import GetInTouchSection from "../common/GetInTouchSection/";
import useFetchPageData from "../../utils/useFetchPageData";

function App() {
  const apiData = useFetchPageData("homepage");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <TopIDToScroll />
      <FirstSection headline={apiData.headline} />
      <ClientsSection client={apiData.client} />
      <SolutionsSection
        solutionstext={apiData.solutionstext}
        solutions={apiData.solutions}
      />
      <TestimonialsSection reviews={apiData.reviews} />
      {!!apiData.works && <WorksSection works={apiData.works} />}
      <AboutSection
        aboutBig={apiData.aboutBig}
        aboutSmall={apiData.aboutSmall}
      />
      <GetInTouchSection footer={apiData.footer} />
    </div>
  );
}

export default App;
