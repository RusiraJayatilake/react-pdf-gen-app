import React from "react";

const Helmet = ({ pageTitle }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
    </>
  );
};

export default Helmet;
