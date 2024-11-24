import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleGetStart = () => {
    navigate("/company");
  };

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
            <button
              className="btn btn-md btn-primary my-3 mb-5"
              type="submit"
              onClick={handleGetStart}
            >
              Get Started
            </button>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            {/* Sign Up Form */}
            <form className="p-4 p-md-5 border rounded-3 bg-light">
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label>First Name</label>
                  </div>
                </div>

                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label>Last Name</label>
                  </div>
                </div>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label>Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label>Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-md btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                Already have an account? Click to <a href="/login">Login</a>.
              </small>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpForm;
