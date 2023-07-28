import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import { store } from "./store/index";
import { Provider } from "react-redux";
import "normalize.css";

const theme = {
  token: {
    colorPrimary: "#f79000",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
