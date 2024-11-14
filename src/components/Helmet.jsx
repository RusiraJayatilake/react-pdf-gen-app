import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="This is React Single Page App for Invoice Gen"
        />
      </Helmet>
    </>
  );
};

export default PageHelmet;
