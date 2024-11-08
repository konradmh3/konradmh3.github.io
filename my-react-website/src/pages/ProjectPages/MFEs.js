import "../../style/MFE.css";
import { useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
// import counterWrapper from "remote/counterWrapper";

const MFEs = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div className="MFEsContainerNoScroll">
      <div className="MFEsContainer">
            Hello World!
      </div>
    </div>
  );
};

export default MFEs;
