import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        // color: "default",
        // bg: "#ECE9E1",
      },
    }),
  },
  components: {},
});

export default theme;
