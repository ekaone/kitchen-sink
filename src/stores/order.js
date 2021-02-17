import { proxy } from "valtio";

export const state = proxy({
  count: 10,
  users: [
    { id: 1, username: "root@mail.com", password: "123", isLoggedIn: true },
    { id: 2, username: "admin@mail.com", password: "123", isLoggedIn: false },
    { id: 3, username: "user@mail.com", password: "123", isLoggedIn: false },
  ],
  foods: [
    {
      id: 1,
      name: "Nasi Putih",
      price: 5000,
      image:
        "https://res.cloudinary.com/dk0z4ums3/image/upload/v1536030557/attached_image/nutrisi-dan-kalori-nasi-putih-serta-fungsinya-bagi-tubuh.jpg",
      isSelected: false,
    },
    {
      id: 2,
      name: "Tempe Goreng",
      price: 2000,
      image:
        "https://selerasa.com/wp-content/uploads/2018/10/tempe-goreng-kencur-ebi.jpg",
      isSelected: false,
    },
    {
      id: 3,
      name: "Sayur Terong",
      price: 3000,
      image:
        "https://asset.kompas.com/crops/ef2SiI2aFfXu2haIX0mmfounoug=/3x0:700x465/750x500/data/photo/2020/09/08/5f579497a8108.jpg",
      isSelected: false,
    },
  ],
  beverages: [
    { id: 1, name: "Es Teh Manis", price: 2500 },
    { id: 2, name: "Air Mineral", price: 2000 },
    { id: 3, name: "Es Campur", price: 7500 },
  ],
  findIndexElement(elements, id) {
    return elements.findIndex((element) => element.id === id);
  },
  carts: [],
  balance: { amount: 20000 },
  cartAddHandler(id) {
    const order = this.foods.find((food) => food.id === id);
    // const indexItem = this.foods.findIndex((itm) => itm.id === id);
    const indexItem = this.findIndexElement(this.foods, id);
    this.carts.push({ ...order, count: 1, amount: order.price });
    this.foods[indexItem].isSelected = true;
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
  get cartsLength() {
    return this.carts.length;
  },
  get cartTotal() {
    let amountTotal = this.carts.reduce(function (prev, cur) {
      return prev + cur.amount;
    }, 0);

    return amountTotal;
  },
});
