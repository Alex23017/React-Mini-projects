import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ThemeProvider>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </ThemeProvider>,
);
