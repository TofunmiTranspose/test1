import { ChakraProvider } from "@chakra-ui/react";
import { Button, Box, Text } from "@chakra-ui/react";
import theme from './theme'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        p={4}
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Hello Chakra UI!
        </Text>
        <Button colorScheme="teal" size="md">
          Click me
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
