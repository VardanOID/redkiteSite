import React from "react";

import IconPlay from "../../../img/Icon_Play.svg";
// import axios from "axios";

function FirstSectionTextInfo({ headline }) {
  console.log(headline);
  // const [hasError, setErrors] = useState(false);
  // const [apiData, setApiData] = useState({});

  // async function fetchData() {
  //   const res = await fetch("https://cors-anywhere.herokuapp.com/http://php-mysql-stack-dnifq.run-eu-central1.goorm.io/index.php?p=homepage.json");
  //   res
  //     .json()
  //     .then(res => setApiData(res))
  //     .catch(err => setErrors(err));
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const [headLines, setHeadLine] = useState([]);
  // useEffect(()=> {
  //   axios.get(`/homepage.json`).then(res => {
  //     const headLines = res.data;
  //     setHeadLine(headLines);
  //   });
  // }, [])

  return (
    <div className="first-section-text-info-box">
      <div>
        {/* <div className="first-section-text">End-To-End Solutions From Concept to Strategic Planning</div> */}
        <div className="first-section-text">{headline}</div>

        {/* <span>Has error: {JSON.stringify(hasError)}</span> */}
        <button className="first-section-button">
          <span className="first-section-button-text">START NOW</span>
        </button>
      </div>
      <div>
        <img src={IconPlay} alt="play" />
      </div>
    </div>

    // <div>

    // <ul>
    //   {headLines.map(headLine=>(
    //     <li>
    //       {headLine.headLine}
    //     </li>
    //   ))}
    // </ul>
    // </div>
  );
}
export default FirstSectionTextInfo;
