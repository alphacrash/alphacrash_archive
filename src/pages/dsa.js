import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";
import QuestionList from "../container/components/QuestionList";

const DSA = () => {
  return (
    <BrowserOnly>
      <QuestionList />
    </BrowserOnly>
  );
};

export default DSA;
