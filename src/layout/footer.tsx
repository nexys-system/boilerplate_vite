import React from "react";
import { github, version } from "../config";

export default () => (
  <footer>
    <div className="container">
      <p>
        <small>
          <a href={github.sha}>{version}</a>
        </small>
      </p>
    </div>
  </footer>
);
