import React from "react";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import Users from "../../users/Users";

function Order() {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="6">
          <Users header={"Users Active"} />
        </CCol>

        <CCol xs="12" lg="6">
          <Users header={"Companies"} />
        </CCol>
      </CRow>
    </>
  );
}

export default Order;
