import React from "react";
import PdfCard from "./PdfCard";
import Layout from "../../layout";
import Helmet from "../Helmet";

const InvoiceList = () => {
  return (
    <>
      <Helmet pageTitle={"invoice list"} />
      <Layout>
        <div className="col-sm-12">
          <h2 className="text-center">List of invoices</h2>
          <div className="row gap-4 py-3 justify-content-center align-items-center">
            <PdfCard title="Oasic ltd Invoice" />
            <PdfCard title="Libra ltd Invoice" />
            <PdfCard title="Xpress ltd Invoice" />
            <PdfCard title="Cardic ltd Invoice" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default InvoiceList;
