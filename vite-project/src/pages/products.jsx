import React, { useEffect, useState } from "react";
import { api } from "../utils/utils";
import {
  Card,
  Image,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  Button,
  Wrap,
  Badge,
  Box,
  Grid,
  GridItem,
  Stack,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
//import "./product.css";

const Items = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fecthing products", error);
    }
  };

  //   const deleteProduct = async (id) => {
  //     try {
  //       await api.delete(`/product/${id}`);
  //       console.log("product deleted:", id);
  //       setProducts(data.filter((product) => product.id !== id));
  //     } catch (error) {
  //       console.error("Error deleting product:", error);
  //     }
  //   };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div bg="blueviolet">
      <Heading>Products Menu</Heading>
      <div className="Search">
        <div className="search-bar-container">
          <SearchBar  />
          {/* <div>SearchResults</div> */}
        </div>
      </div>

      {products.map((product) => (
        <Box
          key={product.id}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Box>
            <Image src={product.image_url} />
          </Box>

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {/* {property.beds} beds &bull; {property.baths} baths */}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {product.title}
            </Box>

            <Box>
              $ {product.price}
              <Box as="span" color="gray.600" fontSize="sm">
                / on Offer
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Description
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {product.description}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Box>
                  <Button colorScheme="blue">Order Now</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default Items;