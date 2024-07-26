import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const JSONLD = ({ data }: any) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JSONLD;
