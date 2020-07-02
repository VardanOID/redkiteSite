
import React from "react";

import IconPlay from "../../../img/Icon_Play.svg";
// import axios from "axios";

function FirstSectionTextInfo() {
  // const [hasError, setErrors] = useState(false);
  // const [headLine, setHeadLine] = useState({});

  // async function fetchData() {
  //   const res = await fetch("https://cors-anywhere.herokuapp.com/http://rb2.redkite.io/homepage.json");
  //   res
  //     .json()
  //     .then(res => setHeadLine(res))
  //     .catch(err => setErrors(err));
  // }
  // useEffect(() => {
  //   fetchData();
  // });


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
        <div className="first-section-text">End-To-End Solutions From Concept to Strategic Planning</div>
        {/* <div className="first-section-text">{JSON.stringify(headLine.headLine)}</div> */}
        {/* <hr /> */}
      {/* <span>Has error: {JSON.stringify(hasError)}</span> */}
        <button  className="first-section-button"><span className="first-section-button-text">START NOW</span></button>
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
