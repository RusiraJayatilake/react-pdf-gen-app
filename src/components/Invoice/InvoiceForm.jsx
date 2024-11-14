import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import Layout from "../../layout";
import { useNavigate } from "react-router-dom";
import PageHelmet from "../Helmet";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const InvoiceForm = () => {
  const [formRows, setFormRows] = useState([
    { id: 1, item: "", quantity: "", price: "" },
  ]);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  // handle form submission
  const onSubmit = (data) => {
    const invoiceData = { ...data, invoiceItems: JSON.stringify(formRows) };
    // reset
    reset();
    // set default values
    setFormRows([{ id: 1, item: "", quantity: "", price: "" }]);

    const params = new URLSearchParams(invoiceData).toString();
    navigate(`/invoice-list?${params}`);
  };

  // add a row
  const addRow = () => {
    setFormRows([
      ...formRows,
      {
        id: formRows.length + 1,
        item: "",
        quantity: "",
        price: "",
      },
    ]);
  };

  // handle add row input changes
  const handleAddRowInputChanges = (id, field, value) => {
    setFormRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <>
      <PageHelmet pageTitle={"Add Invoice Details"} />
      <Layout>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-sm-12">
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
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Billing Address</label>
                <input
                  type="text"
                  {...register("billing_address")}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Invoice Details</label>
                <div className="mb-3">
                  <div className="container">
                    <div className="row mb-2 align-items-center">
                      {formRows.map((row) => (
                        <>
                          <div className="col-md-5 col-sm-4">
                            <label className="form-label">Items</label>
                            <input
                              type="text"
                              value={row.item}
                              onChange={(e) =>
                                handleAddRowInputChanges(
                                  row.id,
                                  "item",
                                  e.target.value
                                )
                              }
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-2">
                            <label className="form-label">Price</label>
                            <input
                              type="decimal"
                              value={row.price}
                              onChange={(e) =>
                                handleAddRowInputChanges(
                                  row.id,
                                  "price",
                                  e.target.value
                                )
                              }
                              className="form-control"
                              min="0.00"
                              max="10000.00"
                              required
                            />
                          </div>
                          <div className="col-md-2">
                            <label className="form-label">Qty</label>
                            <input
                              type="number"
                              value={row.quantity}
                              onChange={(e) =>
                                handleAddRowInputChanges(
                                  row.id,
                                  "quantity",
                                  e.target.value
                                )
                              }
                              className="form-control"
                              min="0.00"
                              max="10000.00"
                              required
                            />
                          </div>

                          <div className="col">
                            <IoMdClose
                              size={25}
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                setFormRows(
                                  formRows.filter((fr) => fr.id !== row.id)
                                )
                              }
                            />
                          </div>
                        </>
                      ))}
                    </div>
                    <div className="row align-items-center">
                      <div className="col">
                        <div onClick={addRow} style={{ cursor: "pointer" }}>
                          <IoMdAdd size={20} />
                          <span>Add Items</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

            {/* Go back */}
            <div className="mt-3 d-flex align-items-center gap-1">
              <HiOutlineArrowNarrowLeft size={14} />
              <a href={"/invoice-list"}>Go Back</a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default InvoiceForm;
