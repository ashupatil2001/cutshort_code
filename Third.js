import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  Text,
  Circle,
  Divider,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { FaUserAlt, FaUsers } from "react-icons/fa";

export default function Third() {
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
                <Divider borderColor="#644ce2" width={4} />
                <Divider width={4} borderWidth="1px" />
                <Circle size="30px" borderWidth="1px" color="black">
                  4
                </Circle>
              </Flex>
            </Box>
          </Center>

          <Text
            ml={2}
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            mb={4}
          >
            How are you planning to use Eden?
          </Text>

          <Text ml={2} fontSize="l" color="gray" textAlign="center" mb={8}>
            We'll streamline your setup experience accordingly.
          </Text>

          <Center>
            <Box my={4} textAlign="left" maxW="400px">
              <form>
                <Flex mt={2} justifyContent="flex-start">
                  <FormControl
                    mb={4}
                    borderWidth="1px"
                    borderColor="#644ce2"
                    borderRadius={6}
                    mr={4}
                    padding={4}
                  >
                    <Text ml={2} fontSize="l" mt={4} mb={4} fontWeight="bold">
                      <Box as={FaUserAlt} color="black" />
                      For myself
                    </Text>
                    <Text ml={2} fontSize="sm" mb={4} color="gray.500">
                      Write better. Think more clearly. Stay organized.
                    </Text>
                  </FormControl>
                  <FormControl
                    mb={4}
                    borderWidth="1px"
                    borderRadius={6}
                    ml={4}
                    padding={4}
                  >
                    <Text ml={2} fontSize="l" mt={4} mb={4} fontWeight="bold">
                      <Box as={FaUsers} color="black" />
                      With my team
                    </Text>
                    <Text ml={2} fontSize="sm" mb={4} color="gray.500">
                      Wicks, docs, tasks & projects, all in one place.
                    </Text>
                  </FormControl>
                </Flex>
                <Link to="/fourth">
                  <Button
                    bg="#644ce2"
                    color="white"
                    type="submit"
                    width="full"
                    mt={4}
                  >
                    Create Workplace
                  </Button>
                </Link>
              </form>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
}
