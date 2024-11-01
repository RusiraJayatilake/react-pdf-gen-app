import React from "react";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "./Invoice";
import { saveAs } from "file-saver";
import Layout from "../../layout";
import { useLocation } from "react-router-dom";

// icons
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDownload, HiOutlinePrinter } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";

const PdfCard = ({ title }) => {
  let location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // console.log("URL Data: ", searchParams);

  //   const handleShare = async (blob) => {
  //     await saveAs(blob, `invoice.pdf`);
  //     window.location.href = `mailto:?subject=${encodeURIComponent(
  //       `Invoice`
  //     )}&body=${encodeURIComponent(`Kindly find attached invoice`)}`;
  //   };

  const date = searchParams.get("date");
  const invoice_number = searchParams.get("invoice_number");
  const billing_address = searchParams.get("billing_address");
  const invoiceItems = JSON.parse(searchParams.get("invoiceItems") || "[]");
  // console.log("invoice items: ", invoiceItems);

  return (
    <>
      <Layout>
        <div className="col-lg-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <PDFDownloadLink document={<Invoice />} fileName="invoice.pdf">
                <div className="d-flex align-items-center gap-1">
                  <HiOutlineDownload />
                  <a>Download</a>
                </div>
              </PDFDownloadLink>

              <BlobProvider document={<Invoice />}>
                {({ url }) => (
                  <a href={url} target="_blank">
                    <HiOutlinePrinter size={14} />
                    <span>Print</span>
                  </a>
                )}
              </BlobProvider>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <ul>
              <li>Date: {date}</li>
              <li>Invoice Number: {invoice_number}</li>
              <li>Billing Address: {billing_address}</li>
              {invoiceItems.map((value, index) => (
                <ul key={index}>
                  <div className="row">
                    <div className="col">
                      <li>{value.item}</li>
                      <li>{value.quantity}</li>
                      <li>{value.price}</li>
                      <li>{value.amount}</li>
                    </div>
                  </div>
                </ul>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PdfCard;
