import { proxy } from "valtio";

export const state = proxy({
  count: 10,
  users: [
    { id: 1, username: "root@mail.com", password: "123", isLoggedIn: true },
    { id: 2, username: "admin@mail.com", password: "123", isLoggedIn: false },
    { id: 3, username: "user@mail.com", password: "123", isLoggedIn: false },
  ],
  foods: [
    { id: 1, name: "Nasi Putih", price: 5000, isSelected: false },
    { id: 2, name: "Tempe Goreng", price: 2000, isSelected: false },
    { id: 3, name: "Sayur Terong", price: 3000, isSelected: false },
  ],
  beverages: [
    { id: 1, name: "Es Teh Manis", price: "2500" },
    { id: 2, name: "Air Mineral", price: "2000" },
    { id: 3, name: "Es Campur", price: "7500" },
  ],
  carts: [],
  cartAddHandler: function (id) {
    const order = this.foods.find((food) => food.id === id);
    const indexItem = this.foods.findIndex((itm) => itm.id === id);
    this.carts.push({ ...order, count: 1 });
    this.foods[indexItem].isSelected = true;
  },
  cartsEmpty: function () {
    this.carts = [];
  },
  cartsLength: function () {
    return this.carts.length;
  },
  cartIncrementItem: function (id) {
    const indexItem = this.carts.findIndex((itm) => itm.id === id);
    this.carts[indexItem].count += 1;
  },
  cartDecrementItem: function (id) {
    const indexItem = this.carts.findIndex((itm) => itm.id === id);
    const indexItemFoods = this.foods.findIndex((itm) => itm.id === id);
    this.carts[indexItem].count -= 1;
    if (this.carts[indexItem].count === 0) {
      this.carts.splice(indexItem, 1);
      this.foods[indexItemFoods].isSelected = false;
    }
  },
});
