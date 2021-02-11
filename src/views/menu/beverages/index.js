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
import { useProxy } from "valtio";
import { state } from "../../../stores/order";

const Menu = ({ id, name, price }) => (
  <CCol key={id} xs="12" sm="6" md="3">
    <CCard color="secondary">
      <CCardBody>
        <blockquote className="card-bodyquote">
          <p>{name}</p>
          <footer>{price}</footer>
        </blockquote>
      </CCardBody>
    </CCard>
  </CCol>
);

const Ordered = ({ id, name, price }) => (
  <CListGroupItem key={id} className="justify-content-between">
    {name}
    <CBadge className="float-right" shape="pill" color="primary">
      {price}
    </CBadge>
  </CListGroupItem>
);

function Cards() {
  const snapshot = useProxy(state);
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>Order</CCardHeader>
            <CCardBody>
              <CListGroup>
                {snapshot.foods.map((food) => (
                  <Ordered id={food.id} name={food.name} price={food.price} />
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="8">
          <CCard>
            <CCardBody>
              <CRow>
                {snapshot.foods.map((food) => (
                  <Menu id={food.id} name={food.name} price={food.price} />
                ))}
              </CRow>
            </CCardBody>
            <CCardFooter>Card footer</CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default Cards;
