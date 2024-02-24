import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Textarea, VStack, useToast } from "@chakra-ui/react";
import { FaRobot, FaPlay } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [actor, setActor] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you'd connect to the AI tools to generate the video
    toast({
      title: "Video Generation Requested.",
      description: "We're generating your video. Please wait...",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={10} style={{ backgroundImage: "url('INSERT_VALID_IMAGE_URL_HERE')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} boxShadow="2xl" borderRadius="2xl">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" fontWeight="bold" textAlign="center" color="brand.800">
          Virtual Actor Video Generator
        </Heading>
        <Box as="form" width="100%" onSubmit={handleSubmit}>
          <FormControl id="prompt" isRequired>
            <FormLabel>Text Prompt</FormLabel>
            <Textarea placeholder="Enter the text you want the actor to say..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          </FormControl>
          <FormControl id="actor" isRequired mt={4}>
            <FormLabel>Choose an Actor</FormLabel>
            <Select placeholder="Select an actor" value={actor} onChange={(e) => setActor(e.target.value)}>
              <option value="actor1">Actor 1</option>
              <option value="actor2">Actor 2</option>
              <option value="actor3">Actor 3</option>
              {/* Add more actors as needed */}
            </Select>
          </FormControl>
          <Button mt={6} colorScheme="blue" size="lg" boxShadow="md" leftIcon={<FaRobot />} rightIcon={<FaPlay />} type="submit" isFullWidth>
            Generate Video
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
