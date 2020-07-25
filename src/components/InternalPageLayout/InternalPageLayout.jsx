import React from "react";
import CoverBox from "../common/Cover/";
import ContactUs from "../common/ContactUs";
import GradientNumberList from "../common/GradientNumbersList";
import MainBoxForIMGAndBox from "../common/IMGWithRightBox";
import LeftAndRightSections from "../common/LeftAndRIghtSections";
import LargIMGWithRightBox from "../common/LargIMGWithRightBox";
import useFetchPageData from "../../utils/useFetchPageData";
import Loading from "../common/Loading";
import TopIDToScroll from "../common/TopIDToScroll/";
const InternalPageLayout = ({ pageName }) => {
  const apiData = useFetchPageData(pageName);
  const blockNames = Object.keys(apiData);
  console.log(pageName);
  return (
    <div className="page">
      <TopIDToScroll />
      <Loading />
      {blockNames.map((blockName) => {
        switch (blockName) {
          case "titleSection":
            return (
              <CoverBox
                key="titleSection"
                titleSectionHeading={apiData.titleSectionHeading}
                titleSectionParagraph={apiData.titleSectionParagraph}
                titleSectionImage={apiData.titleSectionImage}
                titleSectionText={apiData.titleSectionText}
              />
            );

          case "contentSection":
            return (
              <MainBoxForIMGAndBox
                key="contentSection"
                mainContent={apiData.mainContent}
                contentSectionHeading={apiData.contentSectionHeading}
                contentSectionData={apiData.contentSectionData}
              />
            );
          case "roadmapSection":
            return (
              <GradientNumberList
                key="roadmapSection"
                roadmapSectionHeading={apiData.roadmapSectionHeading}
                roadmapSectionData={apiData.roadmapSectionData}
                roadmapSectionButton={apiData.roadmapSectionButton}
              />
            );

          case "closingContentSection":
            return (
              <LargIMGWithRightBox
                key="closingContentSection"
                closingContentSectionHeading={
                  apiData.closingContentSectionHeading
                }
                closingContentSectionParagraph={
                  apiData.closingContentSectionParagraph
                }
                closingContentSectionImage={apiData.closingContentSectionImage}
                closingContentSectionButton={
                  apiData.closingContentSectionButton
                }
              />
            );
          case "customerCasesSection":
            return (
              <LeftAndRightSections
                key="customerCasesSection"
                customerCasesSectionContent={
                  apiData.customerCasesSectionContent
                }
                customerCasesSectionButton={apiData.customerCasesSectionButton}
              />
            );
          case "contactSection":
            return (
              <ContactUs
                key="contactSection"
                contactSectionHeading={apiData.contactSectionHeading}
                contactSectionFields={apiData.contactSectionFields}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default InternalPageLayout;
