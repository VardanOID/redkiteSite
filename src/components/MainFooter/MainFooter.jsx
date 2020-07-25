import React, { useState, useEffect } from "react";
import MainFooterFirst from "./MainFooterFirst";
import MainFooterSecond from "./MaintFooterSecond";
import styles from "./MainFooter.module.scss";
function MainFooter() {
  const [apiData, setApiData] = useState({});

  async function fetchData() {
    const res = await fetch("http://api.redkite.io/footer.json");
    res.json().then((res) => setApiData(res));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.mainFooterBox}>
        <MainFooterFirst
          getInTouchText={apiData.getInTouchText}
          socialMedia={apiData.socialMedia}
        />
        <MainFooterSecond copyright={apiData.copyright} />
      </div>
    </div>
  );
}
export default MainFooter;
