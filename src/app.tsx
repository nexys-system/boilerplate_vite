import { BrowserRouter, Route, Routes } from "react-router-dom";

import { basename } from "./config";
import Home from "./home";
import NotFound from './not-found';

import links from "./links";

export default () => {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path={links.home.link} element={<Home />} />
        <Route path={"/:any"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
