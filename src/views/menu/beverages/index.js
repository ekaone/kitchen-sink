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
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  BsFillArchiveFill,
  BsPlusSquareFill,
  BsDashSquareFill,
  BsFillTrashFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { snapshot, useProxy } from "valtio";
import { state } from "../../../stores/order";

function Beverages() {
  const snapshot = useProxy(state);
  console.table(snapshot.carts);

  const Menu = ({ id, name, price, isSelected, image }) => (
    <CCol xs="12" sm="6" md="3">
      <CCard>
        <CCardHeader>{name}</CCardHeader>
        <CCardBody>
          <img className="d-block w-100" src={image} />
          <blockquote className="card-bodyquote">
            <footer>Rp. {price}</footer>
          </blockquote>
        </CCardBody>
        <CCardFooter>
          {!isSelected ? (
            <BsFillPlusCircleFill
              onClick={() => state.cartAddHandler(id)}
              className="float-right"
              style={{ cursor: "pointer", fontSize: "20px" }}
            />
          ) : (
            ""
          )}
        </CCardFooter>
      </CCard>
    </CCol>
  );

  const Ordered = ({ id, name, count }) => (
    <CListGroupItem className="justify-content-between">
      {name}
      <span className="float-right">
        <BsDashSquareFill
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => state.cartDecrementItem(id)}
        />
        <span style={{ margin: "5px" }}> </span>
        {count} <span style={{ margin: "5px" }}> </span>
        <BsPlusSquareFill
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => state.cartIncrementItem(id)}
        />
      </span>
    </CListGroupItem>
  );

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Balance {state.balance.amount - state.cartTotal}
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                {snapshot.carts?.map((cart) => {
                  return cart.count <= 0 ? (
                    ""
                  ) : (
                    <Ordered
                      key={cart.id}
                      id={cart.id}
                      name={cart.name}
                      count={cart.count}
                    />
                  );
                })}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="8">
          <CCard>
            <CCardBody>
              <CRow>
                {snapshot.foods.map((food) => (
                  <Menu
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    isSelected={food.isSelected}
                    image={food.image}
                  />
                ))}
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton
                block
                color="primary"
                onClick={() => console.log(state.cartTotal)}
              >
                Check out
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default Beverages;
