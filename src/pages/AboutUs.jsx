import { Box, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>About Us</Heading>
      <Text fontSize="lg">
        Welcome to our Todo App! We are dedicated to helping you manage your tasks efficiently and effectively.
      </Text>
    </Box>
  );
};

export default AboutUs;