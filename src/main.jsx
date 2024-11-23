import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Component
import InvoiceForm from "./components/Invoice/InvoiceForm";
import PdfCard from "./components/Invoice/PdfCard";
import CompanyDetailsForm from "./components/Company/CompanyDetailsForm";
import Error404 from "./components/404/404Page";
import SignUpForm from "./components/Auth/SignForm";
import LoginForm from "./components/Auth/LoginForm";

// Page
import HomePage from "./page/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/company" element={<CompanyDetailsForm />} />
        <Route path="/add-invoice" element={<InvoiceForm />} />
        <Route path="/invoice-list" element={<PdfCard />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
