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
import {
  BsFillArchiveFill,
  BsPlusSquareFill,
  BsDashSquareFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { snapshot, useProxy } from "valtio";
import { state } from "../../../stores/order";

function Beverages() {
  const snapshot = useProxy(state);
  console.log(snapshot.foods);

  const Menu = ({ id, name, price, isSelected }) => (
    <CCol key={id} xs="12" sm="6" md="3">
      <CCard color="secondary">
        <CCardBody>
          <blockquote className="card-bodyquote">
            <p>
              {name} {id}
            </p>
            <footer>{price}</footer>
          </blockquote>
        </CCardBody>
        <CCardFooter>
          {!isSelected ? (
            <BsFillArchiveFill
              onClick={() => state.cartAddHandler(id)}
              className="float-right"
              style={{ color: "red", cursor: "pointer" }}
            />
          ) : (
            ""
          )}
        </CCardFooter>
      </CCard>
    </CCol>
  );

  const Ordered = ({ id, name, price, count }) => (
    <CListGroupItem key={id} className="justify-content-between">
      {name}
      <span className="float-right">
        <BsDashSquareFill onClick={() => state.cartDecrementItem(id)} /> {count}{" "}
        {price} <BsPlusSquareFill onClick={() => state.cartIncrementItem(id)} />
      </span>
    </CListGroupItem>
  );

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Order {snapshot.cartsLength()}
              <BsFillTrashFill
                onClick={() => snapshot.cartsEmpty()}
                style={{ cursor: "pointer" }}
              />
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                {snapshot.carts?.map((cart) => {
                  return cart.count <= 0 ? (
                    ""
                  ) : (
                    <Ordered
                      id={cart.id}
                      name={cart.name}
                      price={cart.price}
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
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    isSelected={food.isSelected}
                  />
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

export default Beverages;
