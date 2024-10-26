import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../layout";

const InvoiceForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout>
      <div className="col-lg-7 col-sm-12">
        <h2>Add an Invoice</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card mt-3 py-4 px-4 shadow-sm"
        >
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              {...register("date")}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Invoice Number</label>
            <input
              type="number"
              {...register("invoice_number")}
              className="form-control"
              min="0.00"
              max="10000.00"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Invoice Title</label>
            <input
              type="text"
              {...register("invoice_title")}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Invoice Details</label>
            <input
              type="text"
              {...register("invoice_details")}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Customer Name</label>
            <input
              type="text"
              {...register("customer_name")}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input
              type="number"
              {...register("amount")}
              className="form-control"
              min="0.00"
              max="10000.00"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default InvoiceForm;
