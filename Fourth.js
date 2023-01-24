import React from "react";
import {
  Box,
  Center,
  Flex,
  Text,
  Circle,
  Divider,
  Button,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

export default function Fourth() {
  return (
    <>
      <Center h="100vh">
        <Box p="5" maxW="600px">
          <Flex align="center" mt={2} justifyContent="center">
            <img src="Image/logo.png" alt="Logo" />

            <Text ml={2} fontSize="3xl" fontWeight="bold">
              Eden
            </Text>
          </Flex>

          <Center>
            <Box p="5" maxW="300px" mt={4} mb={6}>
              <Flex align="center" mt={2} justifyContent="center">
                <Circle size="30px" bg="#644ce2" color="white">
                  1
                </Circle>
                <Divider borderColor="#644ce2" width={8} />
                <Circle size="30px" bg="#644ce2" color="white">
                  2
                </Circle>
                <Divider borderColor="#644ce2" width={8} />
                <Circle size="30px" bg="#644ce2" color="white">
                  3
                </Circle>
                <Divider borderColor="#644ce2" width={8} />
                <Circle size="30px" bg="#644ce2" color="white">
                  4
                </Circle>
              </Flex>
            </Box>
          </Center>

          <Center>
            <Circle size="50px" bg="#644ce2" color="white" mb={6}>
              <Box as={FaCheck} color="white" />
            </Circle>
          </Center>

          <Text
            ml={2}
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            mb={4}
          >
            Congragulations, Eren!
          </Text>

          <Text ml={2} fontSize="l" color="gray" textAlign="center" mb={8}>
            You have completed onboarding, you can start using the Eden!
          </Text>

          <Button bg="#644ce2" color="white" type="submit" width="full" mt={4}>
            Launch Eden
          </Button>
        </Box>
      </Center>
    </>
  );
}
