import { Center, Flex, Text, useMultiStyleConfig } from "@chakra-ui/react";

export default function PomoTimer() {
  const styles = useMultiStyleConfig("PomoTimerStyle", {});

  return (
    <Flex __css={styles.flexContainer}>
      <Center w='100px' bg='green.500'>
        <Text>Box 1</Text>
      </Center>
      <Center w='100px' bg='green.500'>
        <Text>Box 2</Text>
      </Center>
    </Flex>
  );
}
