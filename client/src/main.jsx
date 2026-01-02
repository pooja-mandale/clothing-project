import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";   // ✅ THIS IMPORT
import App from "./App.jsx";
import "./index.css";
import reduxStore from "./redux/store";
   // ✅ store import


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>

  </StrictMode>,
)
