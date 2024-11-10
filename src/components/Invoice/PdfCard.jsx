import React from "react";
import { BlobProvider, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Invoice from "./Invoice";
import { saveAs } from "file-saver";
import Layout from "../../layout";
import { useLocation, useNavigate } from "react-router-dom";

// icons
import {
  HiOutlineDownload,
  HiOutlinePrinter,
  HiOutlinePlus,
  HiOutlineX,
  HiOutlinePencil,
} from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";
import "../../assets/css/pdfCard.css";

const PdfCard = () => {
  let location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  //   const handleShare = async (blob) => {
  //     await saveAs(blob, `invoice.pdf`);
  //     window.location.href = `mailto:?subject=${encodeURIComponent(
  //       `Invoice`
  //     )}&body=${encodeURIComponent(`Kindly find attached invoice`)}`;
  //   };

  const handleAddInvoiceButton = () => {
    navigate("/add-invoice");
  };

  //company data
  const company_logo = searchParams.get("companyImg");
  const company_name = searchParams.get("company_name");
  const company_address = searchParams.get("company_address");

  // invoice data
  const date = searchParams.get("date");
  const invoice_number = searchParams.get("invoice_number");
  const billing_address = searchParams.get("billing_address");
  const invoiceItems = JSON.parse(searchParams.get("invoiceItems") || "[]");

  return (
    <>
      <Layout>
        <div className="row justify-content-center align-items-center">
          <div className="col col-sm-12">
            <div
              className="card"
              style={{ width: "18rem", position: "relative", top: 0, right: 0 }}
            >
              <div className="card-body">
                {/* PDF Preview */}
                <div>
                  <BlobProvider
                    document={
                      <Invoice
                        date={date}
                        invoiceNumber={invoice_number}
                        billingAddress={billing_address}
                        invoiceData={invoiceItems}
                        companyLogo={company_logo}
                        companyName={company_name}
                        companyAddress={company_address}
                      />
                    }
                    className="pdf-viewer"
                  >
                    {({ blog, url, loading, error }) => {
                      if (loading) return <p>Loading</p>;
                      if (error) return <p>Error Loading!</p>;
                      return (
                        <img
                          src={url}
                          alt="pdf preview"
                          style={{ width: "100%", height: "auto" }}
                        />
                      );
                    }}
                  </BlobProvider>
                </div>
                {/* Title */}
                <h6 className="card-title mt-4">
                  Created At: {new Date().toLocaleDateString()}
                </h6>

                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2">
                    {/* Download */}
                    <PDFDownloadLink
                      document={
                        <Invoice
                          date={date}
                          invoiceNumber={invoice_number}
                          billingAddress={billing_address}
                          invoiceData={invoiceItems}
                          companyLogo={company_logo}
                          companyName={company_name}
                          companyAddress={company_address}
                        />
                      }
                      fileName="invoice.pdf"
                    >
                      <div className="btn btn-outline-success btn-circle">
                        <HiOutlineDownload size={14} />
                      </div>
                    </PDFDownloadLink>

                    {/* Print */}
                    <BlobProvider
                      document={
                        <Invoice
                          date={date}
                          invoiceNumber={invoice_number}
                          billingAddress={billing_address}
                          invoiceData={invoiceItems}
                          companyLogo={company_logo}
                          companyName={company_name}
                          companyAddress={company_address}
                        />
                      }
                    >
                      {({ url }) => (
                        <a
                          href={url}
                          target="_blank"
                          className="btn btn-outline-success btn-circle"
                        >
                          <HiOutlinePrinter size={14} />
                        </a>
                      )}
                    </BlobProvider>

                    {/* Share */}
                    <BlobProvider
                      document={
                        <Invoice
                          date={date}
                          invoiceNumber={invoice_number}
                          billingAddress={billing_address}
                          invoiceData={invoiceItems}
                          companyLogo={company_logo}
                          companyName={company_name}
                          companyAddress={company_address}
                        />
                      }
                    >
                      {({ url }) => (
                        <div className="btn btn-outline-success btn-circle">
                          <FiShare2 size={14} />
                        </div>
                      )}
                    </BlobProvider>

                    {/* Edit */}
                    <BlobProvider
                      document={
                        <Invoice
                          date={date}
                          invoiceNumber={invoice_number}
                          billingAddress={billing_address}
                          invoiceData={invoiceItems}
                          companyLogo={company_logo}
                          companyName={company_name}
                          companyAddress={company_address}
                        />
                      }
                    >
                      {({ url }) => (
                        <div className="btn btn-outline-success btn-circle">
                          <HiOutlinePencil size={14} />
                        </div>
                      )}
                    </BlobProvider>

                    {/* Add Invoice */}
                    <button
                      className="btn btn-outline-success btn-circle"
                      onClick={handleAddInvoiceButton}
                    >
                      <HiOutlinePlus size={14} />
                    </button>
                  </div>

                  <HiOutlineX
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      cursor: "pointer",
                    }}
                    size={20}
                    onClick={() => alert("Closed Clicked")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PdfCard;
