import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { App } from "components";

import "./index.css";

import { setupStore } from "store";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element.");

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </Router>
  </StrictMode>
);
