import React from "react";
import Footer from "../components/Footer";
import SignUpForm from "../components/Auth/SignForm";

const HomePage = () => {
  return (
    <>
      <div className="container col-sm-12 col-xl-10 col-xxl-7 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">SPA PDF Gen App</h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
            <button className="btn btn-md btn-primary my-3 mb-5" type="submit">
              Get Started
            </button>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            {/* Sign Up Form */}
            <SignUpForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
