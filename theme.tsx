import { extendTheme } from "@chakra-ui/react";

const colors = {
  brandHero: {
    100: "#242424",
  },
  brandOrange: {
    100: "#fe8c00",
  },
  brandWhite: {
    100: "#FEFEFF",
  },
  brandYellow: {
    100: "#FFFF00",
  },
};

const styles = {
  global: () => ({
    html: {
      overflowY: "scroll",
      scrollBehavior: "smooth",
    },
    "html, body": {
      bg: "#e6dbcc",
    },
  }),
};

export const theme = extendTheme({
  colors,
  styles,
});
