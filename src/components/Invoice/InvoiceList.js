import React from "react";
import PdfCard from "./PdfCard";
import Layout from "../../layout";
import Helmet from "../Helmet";

const InvoiceList = () => {
  return (
    <>
      {/* <Helmet pageTitle={"invoice list"} /> */}
      <Layout>
        <h2 className="text-center">List of invoices</h2>
        <div className="row gap-2 py-4">
          <PdfCard title="Oasic ltd Invoice" />
          <PdfCard title="Libra ltd Invoice" />
          <PdfCard title="Xpress ltd Invoice" />
          <PdfCard title="Cardic ltd Invoice" />
        </div>
      </Layout>
    </>
  );
};

export default InvoiceList;
