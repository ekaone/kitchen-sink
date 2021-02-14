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
    { id: 1, name: "Es Teh Manis", price: 2500 },
    { id: 2, name: "Air Mineral", price: 2000 },
    { id: 3, name: "Es Campur", price: 7500 },
  ],
  carts: [],
  cartAddHandler(id) {
    const order = this.foods.find((food) => food.id === id);
    const indexItem = this.foods.findIndex((itm) => itm.id === id);
    this.carts.push({ ...order, count: 1, amount: order.price });
    this.foods[indexItem].isSelected = true;
  },
  get cartsLength() {
    return this.carts.length;
  },
  cartIncrementItem(id) {
    const indexItem = this.carts.findIndex((itm) => itm.id === id);
    this.carts[indexItem].count += 1;
    this.carts[indexItem].amount =
      this.carts[indexItem].count * this.carts[indexItem].price;
  },
  cartDecrementItem(id) {
    const indexItem = this.carts.findIndex((itm) => itm.id === id);
    const indexItemFoods = this.foods.findIndex((itm) => itm.id === id);
    this.carts[indexItem].count -= 1;
    this.carts[indexItem].amount =
      this.carts[indexItem].count * this.carts[indexItem].price;
    if (this.carts[indexItem].count === 0) {
      this.carts.splice(indexItem, 1);
      this.foods[indexItemFoods].isSelected = false;
    }
  },
  get cartTotal() {
    let amountTotal = this.carts.reduce(function (prev, cur) {
      return prev + cur.amount;
    }, 0);

    return amountTotal;
  },
});
