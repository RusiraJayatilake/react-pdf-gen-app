import { useEffect, useState } from "react";

const useLocalStorageService = () => {
  const [invoices, setInvoices] = useState(() => {
    const savedInvoices = localStorage.getItem("invoices");
    return savedInvoices ? JSON.parse(savedInvoices) : [];
  });

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const addInvoice = (invoice) => {
    setInvoices((prevInvoice) => [...prevInvoice, invoice]);
  };

  const updateInvoice = (invoiceUpdate) => {
    const updatedInvoice = invoices.map((value) => {
      value.id === invoiceUpdate.id ? invoiceUpdate : value;
    });
    setInvoices(updatedInvoice);
  };

  const deleteInvoice = (id) => {
    const deletedInvoice = invoices.filter((value) => value.id !== id);
    setInvoices(deletedInvoice);
  };

  return { addInvoice, updateInvoice, deleteInvoice };
};

export default useLocalStorageService;
