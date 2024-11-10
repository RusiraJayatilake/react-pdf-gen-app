import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceForm from "./components/Invoice/InvoiceForm";
import "bootstrap/dist/css/bootstrap.min.css";
import PdfCard from "./components/Invoice/PdfCard";
import CompanyDetailsForm from "./components/Company/CompanyDetailsForm";
import Error404 from "./components/404/404Page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<CompanyDetailsForm />} />
        <Route path="/add-invoice" element={<InvoiceForm />} />
        <Route path="/invoice-list" element={<PdfCard />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
