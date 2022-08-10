import { Route, Routes } from "react-router-dom";

import Home from "./home";
import NotFound from './not-found';

import links from "./links";

export default () => {
  return (
    <Routes>
      <Route path={links.home.link} element={<Home />} />
      <Route path={"/:any"} element={<NotFound />} />
    </Routes>
  );
};
