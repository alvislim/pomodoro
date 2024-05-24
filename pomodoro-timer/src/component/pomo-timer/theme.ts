import { StyleConfig } from "@chakra-ui/react";

const PomoTimerStyle: StyleConfig = {
  baseStyle: {
    flexContainer: {
      bg: "rgba(255, 255, 255, 0.1)",
      display: "flex",
      flexWrap: "wrap",
      flexDir: "column",
      gap: "1rem",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxW: "480px",
      borderRadius: "6px",
      padding: "20px 0 30px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
    },
  },
};

export default PomoTimerStyle;
