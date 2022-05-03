import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
