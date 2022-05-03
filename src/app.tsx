import { Route, Routes } from "react-router-dom";
import Home from "./home";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:any"} element={<NotFound />} />
    </Routes>
  );
};
