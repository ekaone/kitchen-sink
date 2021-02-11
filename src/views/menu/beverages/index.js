import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Cards = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showCard, setShowCard] = React.useState(true);

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>Order</CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem className="justify-content-between">
                  Cras justo odio
                  <CBadge className="float-right" shape="pill" color="primary">
                    14
                  </CBadge>
                </CListGroupItem>
                <CListGroupItem className="justify-content-between">
                  Dapibus ac facilisis in
                  <CBadge className="float-right" shape="pill" color="primary">
                    2
                  </CBadge>
                </CListGroupItem>
                <CListGroupItem className="justify-content-between">
                  Morbi leo risus
                  <CBadge className="float-right" shape="pill" color="primary">
                    1
                  </CBadge>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol xs="12" sm="6" md="3">
                  <CCard>
                    <CCardBody>Lorem</CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="6" md="3">
                  <CCard>
                    <CCardBody>Lorem</CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="6" md="3">
                  <CCard>
                    <CCardBody>Lorem</CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="6" md="3">
                  <CCard>
                    <CCardBody>Lorem</CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>Card footer</CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Cards;
