import React from "react";
import { useRecoilValue } from "recoil";

import Calendar from "./components/Calendar";

const normalized = ["2022-01-31", "2022-01-15", "2022-01-06", "2022-02-05"];

const App = () => {
  return <Calendar events={normalized} />;
};

export default App;
