import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceForm from "./components/Invoice/InvoiceForm";
import "bootstrap/dist/css/bootstrap.min.css";
import PdfCard from "./components/Invoice/PdfCard";
import CompanyDetailsForm from "./components/Company/CompanyDetailsForm";
import Error404 from "./components/404/404Page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<CompanyDetailsForm />} />
        <Route path="/add-invoice" element={<InvoiceForm />} />
        <Route path="/invoice-list" element={<PdfCard />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
