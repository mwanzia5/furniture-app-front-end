import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  HStack,
  useColorMode,
  IconButton,
  Avatar
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AuthContext } from "./Auth";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const images = [
    "https://hips.hearstapps.com/hmg-prod/images/ghk070123homeminifeature-005-655b983d8bf5f.jpg?crop=1xw:0.9989583333333334xh;center,top&resize=980:*",
    "https://www.interior-essentials.com/wp-content/uploads/2021/07/InteriorEssentialsRoleOfFurnitureInteriorDesign.jpg",
    "https://media.architecturaldigest.com/photos/636285c50aa6a75f552bad1a/2:1/w_1280%2Cc_limit/84070_F22_BEL_HRZ%2520(1).jpg",
    "https://www.architectureanddesign.com.au/getmedia/90cb94b6-6fc0-44f4-bba9-b1b1ca7e898e/6.aspx",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/4/29/0/HUHH2021-Countryside_Park-City-UT_009.jpg.rend.hgtvcom.1280.853.suffix/1619723766213.jpeg",
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
    <Box>
      <Flex p="4" alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Furniture Garden
        </Text>
        {/* Dark mode  */}
        <IconButton
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          aria-label="Toggle Dark Mode"
          variant="ghost"
        />
      </Flex>

      <Box position="relative" overflow="hidden" height="600px">
        <Image
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          objectFit="cover"
          width="100%"
          height="100%"
          transition="opacity 0.5s"
        />
      </Box>
      <div>
        <HStack spacing="4" justify="center" mt="2">
          <Link href="/Home">HOME</Link>
          <Link href="/#">PRODUCTS</Link>
          <Link href="/#">CART</Link> 
          <Link href="/signup"></Link>
          
          {isAuthenticated ? (
            <>
             <Link to="/profile"><Avatar src='https://bit.ly/broken-link' /></Link>
              <Link onClick={logout}>Logout</Link>
            </>
          ) : (
            <Link href="/login">SIGN IN</Link>
          )}
        </HStack>
      </div>
    </Box>
  );
};

export default Header;
