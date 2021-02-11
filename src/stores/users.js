import { proxy } from "valtio";

export const state = proxy(
  { id: 1, username: "root@mail.com", password: "123" },
  { id: 2, username: "admin@mail.com", password: "123" },
  { id: 3, username: "user@mail.com", password: "123" }
);
