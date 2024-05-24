"use client";

import styles from "./page.module.css";
import { ChakraProvider, Box, useColorModeValue } from "@chakra-ui/react";
import theme from "@/theme";
import PomoTimer from "@/component/pomo-timer";
import { useState } from "react";

export default function Home() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const colors = useColorModeValue(
    ["red.100", "teal.50"],
    ["red.900", "teal.900"]
  );

  const bg = colors[tabIndex];

  return (
    <ChakraProvider theme={theme}>
      <Box
        transitionDuration='200ms'
        bg={bg}
        w={"100%"}
        h='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'>
        <PomoTimer tabIndex={tabIndex} setTabIndex={setTabIndex} />
      </Box>
    </ChakraProvider>
  );
}
