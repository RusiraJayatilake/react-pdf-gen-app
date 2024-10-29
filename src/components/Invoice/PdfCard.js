import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDownload, HiOutlinePrinter } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "./Invoice";
import { saveAs } from "file-saver";
import Layout from "../../layout";

const PdfCard = ({ title }) => {
  //   const handleShare = async (blob) => {
  //     await saveAs(blob, `invoice.pdf`);
  //     window.location.href = `mailto:?subject=${encodeURIComponent(
  //       `Invoice`
  //     )}&body=${encodeURIComponent(`Kindly find attached invoice`)}`;
  //   };

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
                {({ url, blob }) => (
                  <a href={url} target="_blank">
                    <HiOutlinePrinter size={14} />
                    <span>Print</span>
                  </a>
                )}
              </BlobProvider>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PdfCard;
