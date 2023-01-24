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
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export default function Second() {
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
                <Divider borderColor="#644ce2" width={4} />
                <Divider width={4} borderWidth="1px" />
                <Circle size="30px" borderWidth="1px" color="black">
                  3
                </Circle>
                <Divider width={8} borderWidth="1px" />
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
            Let's setup a home for all your work
          </Text>

          <Text ml={2} fontSize="l" color="gray" textAlign="center" mb={8}>
            You can always create another workspace later.
          </Text>

          <Center>
            <Box my={4} textAlign="left" maxW="400px">
              <form>
                <FormControl mb={4}>
                  <FormLabel size="sm">Workspace Name</FormLabel>
                  <Input type="text" placeholder="Eden" size="sm" />
                </FormControl>

                <FormControl>
                  <FormLabel size="sm">
                    <Flex>
                      Workspace URL{" "}
                      <Text fontSize="sm" color="gray">
                        (optional)
                      </Text>
                    </Flex>
                  </FormLabel>

                  <Input
                    type="text"
                    placeholder="www.eden.com/"
                    size="sm"
                    variant="filled"
                    maxW="130px"
                  />
                  <Input
                    type="text"
                    placeholder="Example"
                    size="sm"
                    maxW="200px"
                  />
                </FormControl>

                <Link to="/third">
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
