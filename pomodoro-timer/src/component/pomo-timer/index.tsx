import { Center, Flex, Text } from "@chakra-ui/react";

export default function PomoTimer() {
  return (
    <Flex
      flexWrap='wrap'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      width='100%'
      maxW='480px'
      borderRadius='6px'
      padding='20px 0 30px'
      backgroundColor='rgba(255, 255, 255, 0.1)'
      boxShadow='rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'>
      <Center w='100px' bg='green.500'>
        <Text>Box 1</Text>
      </Center>
      <Center w='100px' bg='green.500'>
        <Text>Box 2</Text>
      </Center>
    </Flex>
  );
}
