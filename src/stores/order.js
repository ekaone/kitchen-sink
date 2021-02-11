import { proxy } from "valtio";

export const state = proxy({
  count: 10,
  users: [
    { id: 1, username: "root@mail.com", password: "123" },
    { id: 2, username: "admin@mail.com", password: "123" },
    { id: 3, username: "user@mail.com", password: "123" },
  ],
  foods: [
    { id: 1, name: "Nasi Putih", price: "5000" },
    { id: 2, name: "Tempe Goreng", price: "2000" },
    { id: 3, name: "Sayur Terong", price: "3000" },
  ],
  beverages: [
    { id: 1, name: "Es Teh Manis", price: "2500" },
    { id: 2, name: "Air Mineral", price: "2000" },
    { id: 3, name: "Es Campur", price: "7500" },
  ],
});
