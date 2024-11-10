import React from "react";
import Layout from "../../layout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useFormPersist from "react-hook-form-persist";

const initialValue = {
  company_logo: null,
  company_name: "",
  company_address: "",
};

const CompanyDetailsForm = () => {
  const { register, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: initialValue,
  });
  const navigate = useNavigate();

  useFormPersist("company-form", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const onSubmit = (data) => {
    const file = data.company_logo[0];
    const companyImgUrl = URL.createObjectURL(file);

    const companyData = {
      company_name: data.company_name,
      company_address: data.company_address,
      companyImg: companyImgUrl,
    };

    // save submitted data to localstorage
    localStorage.setItem("company-form", JSON.stringify(companyData));

    const params = new URLSearchParams(companyData).toString();
    navigate(`/invoice-list?${params}`);
    URL.revokeObjectURL(companyImgUrl);
    reset();
  };

  return (
    <>
      <Layout>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-sm-12">
            <h2>Add Company Data</h2>

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
