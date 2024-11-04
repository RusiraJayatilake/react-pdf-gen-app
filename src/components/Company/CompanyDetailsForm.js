import React, { useState } from "react";
import Layout from "../../layout";

const CompanyDetailsForm = () => {
  const [companyInfo, setCompanyInfo] = useState({
    companyLogo: "",
    companyName: "",
    companyAddress: "",
  });

  const handleSubmit = () => {
    alert("Form data submitted");
  };

  return (
    <>
      <Layout>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-sm-12">
            <h2>Add Company Data</h2>
            <form
              className="card mt-3 py-4 px-4 shadow-sm"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label className="form-label">Company Logo</label>
                <input type="file" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Address</label>
                <input type="text" className="form-control" required />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CompanyDetailsForm;
