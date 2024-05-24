"use client";

import styles from "./page.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import PomoTimer from "@/component/pomo-timer";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <PomoTimer />
    </ChakraProvider>
  );
}
