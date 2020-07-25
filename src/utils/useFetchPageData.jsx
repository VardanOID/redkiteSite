// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPageData, setLoading } from "../redux/actions/commonActions";

const animationHidingTime = 1000;

const setPageMeta = (res) => {
  document.title = res.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", res.description);
  document
    .querySelector('meta[name="keywords"]')
    .setAttribute("content", res.keywords);
};

const removeMainAnimation = () => {
  setTimeout(() => {
    const animationId = document.getElementById("mainLoadingAnimation");
    animationId.style.display = "none";
  }, [animationHidingTime]);
};

const useFetchPageData = (pageName) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const pageData = useSelector((store) => store.pageData[pageName]);
  const [apiData, setApiData] = useState(pageData || {});

  useEffect(() => {
    if (!pageData) {
      dispatch(setLoading(true));
      fetch(`http://api.redkite.io/${pageName}.json`)
        .then((res) => {
          if (!res.ok) {
            history.push("/404");
          }
          return res;
        })
        .then((res) => res.json())
        .then((res) => {
          setPageMeta(res);
          setApiData(res);
          dispatch(setPageData(pageName, res));
        })
        .catch(() => {
          history.push("/404");
        })
        .finally(() => {
          removeMainAnimation();
          dispatch(setLoading(false));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageName]);

  return apiData;
};

export default useFetchPageData;
