import { proxy } from "valtio";

export const state = proxy({
  count: 10,
  users: [
    { id: 1, username: "root@mail.com", password: "123", isLoggedIn: true },
    { id: 2, username: "admin@mail.com", password: "123", isLoggedIn: false },
    { id: 3, username: "user@mail.com", password: "123", isLoggedIn: false },
  ],
  foods: [
    { id: 1, name: "Nasi Putih", price: 5000 },
    { id: 2, name: "Tempe Goreng", price: 2000 },
    { id: 3, name: "Sayur Terong", price: 3000 },
    { id: 4, name: "Kerupuk", price: 1000 },
    { id: 5, name: "Jengkol", price: 3500 },
    { id: 6, name: "Mentimun", price: 2500 },
    { id: 7, name: "Tahu", price: 4500 },
    { id: 8, name: "Bakso", price: 1500 },
    { id: 9, name: "Ikan Tuna", price: 4000 },
    { id: 10, name: "Kepiting", price: 1000 },
    { id: 11, name: "Cumi Goreng", price: 6500 },
    { id: 12, name: "Ikan Teri", price: 1750 },
    { id: 13, name: "Nasi Kuning", price: 2500 },
  ],
  beverages: [
    { id: 1, name: "Es Teh Manis", price: "2500" },
    { id: 2, name: "Air Mineral", price: "2000" },
    { id: 3, name: "Es Campur", price: "7500" },
  ],
  carts: [],
  cartAddHandler: function (id) {
    const order = this.foods.find((food) => food.id === id);
    state.carts.push({ ...order, count: 1 });
    //if()
  },
  cartIncrementItem: function (id) {
    let indexItem = this.carts.findIndex((itm) => itm.id === id);
    this.carts[indexItem].count += 1;
    console.log(this.carts);
  },
  cartDecrementItem: function (id) {
    let indexItem = this.carts.findIndex((itm) => itm.id === id);
    this.carts[indexItem].count -= 1;
    console.log(this.carts);
  },
});
