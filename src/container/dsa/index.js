import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import QuestionList from "./components/QuestionList";

const DSARunner = () => {
  return (
    <Provider store={store}>
      <QuestionList />
    </Provider>
  );
};

export default DSARunner;
