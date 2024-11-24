import React from "react";
import Layout from "../../layout";
import { useForm } from "react-hook-form";
import PageHelmet from "../Helmet";
import { ToastContainer } from "react-toastify";

const CompanyDetailsForm = () => {
  // const [companyData, setCompanyData] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // validate image file uploaded
      if (!data.company_logo || data.company_logo.length === 0) {
        return;
      }

      const file = data.company_logo[0];
      const companyImgUrl = URL.createObjectURL(file);

      const companyData = {
        company_name: data.company_name,
        company_address: data.company_address,
        companyImg: companyImgUrl,
      };

      // save data to localstorage
      localStorage.setItem("companyData", JSON.stringify(companyData));
      console.log("Submitted Data: ", localStorage.getItem("companyData"));

      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <PageHelmet pageTitle={"Company"} />
      <Layout>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-sm-12">
            <h2>Add Company Details</h2>

            <form
              className="card mt-3 py-4 px-4 shadow-sm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-3">
                <label className="form-label">Company Logo</label>
                <input
                  type="file"
                  className="form-control"
                  {...register("company_logo")}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("company_name")}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Address</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("company_address")}
                  required
                />
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
