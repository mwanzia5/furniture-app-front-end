import React, { useState, useEffect, useContext } from "react";
import { Heading } from '@chakra-ui/react'
import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  HStack,
  useColorMode,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AuthContext } from "./Auth";
import { extendTheme } from "@chakra-ui/react";

const Header = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);

  const theme = extendTheme({
    textStyles: {
      furnitureGarden: {
        fontSize: ["8xl", "10xl", "12xl", "14xl"], 
        fontWeight: "bold",
        color: "emerald.500",
        fontFamily: "Montserrat",
      },
      ourCollection: {
        fontSize: ["2xl", "3xl"], // Double the font sizes
        color: "emerald.500",
        fontFamily: "Montserrat",
      },
    },
  });

  const images = [
    "https://blog.artsper.com/wp-content/uploads/2021/11/mise-en-avant-1.jpg",
    "https://assets.architecturaldigest.in/photos/600823ba8f87dc05d00e24f6/master/w_1600,c_limit/ASIANPAINTS_DEEPIKA-06-12-17-288b.jpg",
    "https://static.dezeen.com/uploads/2024/02/hauvette-madani-haussmannian-apartment-paris_dezeen_2364_col_14-scaled.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box style={{ background: "transparent" }}> {/* Add style here */}
      <Flex p="4" alignItems="center" justifyContent="space-between">
        <Text
          fontSize="3xl"
          textStyle="furnitureGarden"
          textAlign="center"
          as="h1"
          color="emerald.500"
          fontFamily="Montserrat"
        >
          <Heading>Furniture Garden</Heading>
        </Text>

        {/* Dark mode and Profile icon */}
        <Flex alignItems="center">
          <IconButton
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            aria-label="Toggle Dark Mode"
            variant="ghost"
          />
        </Flex>
      </Flex>

      <div>
        <HStack spacing="4" justify="center" mt="2">
          <Link href="/Home">HOME</Link>
          <Link href="/products">PRODUCTS</Link>
          <Link href="/signup">SIGNUP</Link>

          {isAuthenticated ? (
            <>
              <Link to="/profile">
                <Avatar src="https://bit.ly/broken-link" />
              </Link>
              <Link onClick={logout}>Logout</Link>
            </>
          ) : (
            <Link href="/login">SIGN IN</Link>
          )}
          <Link href="/AdminPage">ADMIN</Link>
          <Link href="/review">REVIEWS</Link>
        </HStack>
      </div>

      <Flex>
        {/* Images */}
        <Box position="relative" overflow="hidden" height="600px" width="66.666%">
          <Image
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            objectFit="cover"
            width="100%"
            height="100%"
            transition="opacity 0.5s"
            borderRadius="10px" 
          />
        </Box>

        {/* Text */}
        <Box width="33.333%" p="7">
          <Text textStyle="ourCollection" textAlign="justified" fontSize="xl">
            Welcome to Furniture Gardens, where we fuse nature's artistry with functional elegance. 
            We believe furniture is more than utility; it's an expression of aesthetics that elevates your space and attenuates your style.
          </Text>
          <Text textStyle="ourCollection" textAlign="justified" mt="4" fontSize="xl">
            At Furniture Gardens, our collection is thoughtfully curated to seamlessly adapt to the unique needs of your living environment. 
            From vibrant hues to rich textures and exquisite symmetry, each piece is meticulously crafted to complement and enhance the harmony of its surroundings.
          </Text>
          <Text textStyle="ourCollection" textAlign="justified" mt="4" fontSize="xl">
            Experience the essence of exceptional furniture at Furniture Gardens, where every piece is a masterpiece in itself.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
