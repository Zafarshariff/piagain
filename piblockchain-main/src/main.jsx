import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css'
import ValidatePage from "./pages/ValidatePage.jsx";
import UnlockWalletPage from "./pages/UnlockWalletPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Special Routes */}
      <Route path="/pi/validate" element={<ValidatePage />} />
      <Route path="/pi/unlock-wallet" element={<UnlockWalletPage />} />

      {/* Default: Load App for all other routes */}
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);