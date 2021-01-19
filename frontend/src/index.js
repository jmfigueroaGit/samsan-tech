import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

import "./sass/index.scss";

const query = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
