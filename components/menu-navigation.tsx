import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import {
  GiNoodles,
  GiNoodleBall,
  GiDrinking,
  GiDrinkMe,
  GiAbstract051,
} from "react-icons/gi";

const menus = [
  { id: 1, name: "Pizza", icon: <GiNoodleBall /> },
  { id: 2, name: "Noodle", icon: <GiNoodles /> },
  { id: 3, name: "Dessert", icon: <GiDrinking /> },
  { id: 4, name: "Cocktailes", icon: <GiDrinkMe /> },
  { id: 5, name: "Salad", icon: <GiAbstract051 /> },
];

function MenuNavigation() {
  return (
    <Stack direction="column" spacing={1.5}>
      {menus.map((menu) => (
        <Button
          key={menu.id}
          rightIcon={menu.icon}
          iconSpacing="auto"
          colorScheme="brandHero.100"
          variant="outline"
          rounded="xl"
          width="10rem"
          size="sm"
          _hover={{ bg: "yellow", border: "none", shadow: "lg" }}
        >
          {menu.name}
        </Button>
      ))}
    </Stack>
  );
}

export default MenuNavigation;
