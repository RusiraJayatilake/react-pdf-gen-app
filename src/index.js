import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceForm from "./components/Invoice/InvoiceForm";
import "bootstrap/dist/css/bootstrap.min.css";
import PdfCard from "./components/Invoice/PdfCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<InvoiceForm />} />
        <Route path="/list" element={<PdfCard title={"Oasic ltd Invoice"} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
