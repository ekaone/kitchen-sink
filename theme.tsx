import { extendTheme } from "@chakra-ui/react";

const colors = {
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
      bgGradient: "linear(140deg, #020024 0%, #090979 35%, #00d4ff 100%)",
      backgroundAttachment: "fixed",
      color: "#fe8c00",
    },
  }),
};

export const theme = extendTheme({
  colors,
  styles,
});
