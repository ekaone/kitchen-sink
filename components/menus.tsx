import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  TimeIcon,
  SunIcon,
} from "@chakra-ui/icons";

const menus = [
  { id: 1, name: "Pizza", icon: <PhoneIcon /> },
  { id: 2, name: "Noodle", icon: <AddIcon /> },
  { id: 3, name: "Dessert", icon: <WarningIcon /> },
  { id: 4, name: "Cocktailes", icon: <TimeIcon /> },
  { id: 5, name: "Salad", icon: <SunIcon /> },
];

function Menus() {
  return (
    <Stack direction="column" spacing={1}>
      {menus.map((menu) => (
        <Button
          key={menu.id}
          leftIcon={menu.icon}
          iconSpacing="auto"
          colorScheme="cyan"
          variant="outline"
          rounded="xl"
          width="10rem"
          _hover={{ bg: "yellow", border: "none", shadow: "lg" }}
        >
          {menu.name}
        </Button>
      ))}
    </Stack>
  );
}

export default Menus;
