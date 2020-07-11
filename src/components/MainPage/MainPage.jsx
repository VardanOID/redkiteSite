import React, { useEffect, useState } from "react";
import FirstSection from "./FirstSection/FirstSection";
import ClientsSection from "./ClientsSection/ClientsSection";
import SolutionsSection from "./SoluionsSection/SolutionsSection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import WorksSection from "./WorksSection/WorksSection";
import AboutSection from "./AboutSection/AboutSection";
import GetInTouchSection from "./GetInTouchSection/GetInTouchSection";

function App() {
  const [hasError, setErrors] = useState(false);
  const [apiData, setApiData] = useState({});

  async function fetchData() {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/http://php-mysql-stack-dnifq.run-eu-central1.goorm.io/index.php?p=homepage.json"
    );
    res
      .json()
      .then((res) => setApiData(res))
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(apiData.solutions);
  console.log(apiData);

  console.log(hasError);
  return (
    <div className="">
      <FirstSection headline={apiData.headline} />
      <ClientsSection client={apiData.client} />
      <SolutionsSection
        solutionstext={apiData.solutionstext}
        solutions={apiData.solutions}
      />
      <TestimonialsSection reviews={apiData.reviews} />
      <WorksSection works={apiData.works} />
      <AboutSection
        aboutBig={apiData.aboutBig}
        aboutSmall={apiData.aboutSmall}
      />
      <GetInTouchSection footer={apiData.footer} />
    </div>
  );
}

export default App;
