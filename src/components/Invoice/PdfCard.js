import React from "react";
import { BlobProvider, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Invoice from "./Invoice";
import { saveAs } from "file-saver";
import Layout from "../../layout";
import { useLocation } from "react-router-dom";

// icons
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDownload, HiOutlinePrinter } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";
import "../../assets/css/pdfCard.css";

const PdfCard = () => {
  let location = useLocation();
  const searchParams = new URLSearchParams(location.search);

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

  return (
    <>
      <Layout>
        <div className="row justify-content-center align-items-center">
          <div className="col col-sm-12">
            <div className="card" style={{ width: "20rem" }}>
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

                <h6 className="card-title mt-4">
                  Created At: {new Date().toLocaleDateString()}
                </h6>

                <div className="d-flex justify-content-between">
                  {/* Download */}
                  <PDFDownloadLink
                    document={
                      <Invoice
                        date={date}
                        invoiceNumber={invoice_number}
                        billingAddress={billing_address}
                        invoiceData={invoiceItems}
                      />
                    }
                    fileName="invoice.pdf"
                  >
                    <div className="d-flex align-items-center btn btn-light">
                      <HiOutlineDownload size={14} />
                      <span>Download</span>
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
                      />
                    }
                  >
                    {({ url }) => (
                      <a
                        href={url}
                        target="_blank"
                        className="d-flex align-items-center btn btn-light"
                      >
                        <HiOutlinePrinter size={14} />
                        <span>Print</span>
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
                      />
                    }
                  >
                    {({ url }) => (
                      <div className="d-flex align-items-center btn btn-light">
                        <HiOutlinePrinter size={14} />
                        <span>Share</span>
                      </div>
                    )}
                  </BlobProvider>
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
