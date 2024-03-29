import React, { useEffect, useState } from "react";
import { api } from "../utils/utils";
import {
 Image,
 Stack,
 Box,
 Heading,
 Text,
 Button,
 Divider,
 Grid,
 Input,
 Accordion,
 AccordionButton,
 AccordionItem,
 AccordionPanel,
 AccordionIcon,
 AspectRatio,
} from "@chakra-ui/react";

import SearchBar from "../components/SearchBar";
import { FaSearch } from "react-icons/fa"

const Items = () => {
 const [products, setProducts] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const fetchProducts = async () => {
   try {
     const response = await api.get("/product");
     setProducts(response.data);
   } catch (error) {
     console.error("Error fetching products", error);
   }
 };


 useEffect(() => {
   fetchProducts();
 }, []);


 const handleSearch = (event) => {
   setSearchTerm(event.target.value);
 };


 const filteredProducts = products.filter((product) =>
   product.title.toLowerCase().includes(searchTerm.toLowerCase())
 );


 return (
   <div>
     <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Products Menu</h1>
     <FaSearch />
     <Input
       type="text"
       placeholder="Search products..."
       value={searchTerm}
       onChange={handleSearch}
       mb={4}
     />
     <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>

       {filteredProducts.map((product) => (
         <Box
           key={product.id}
           borderWidth="1px"
           borderRadius="lg"
           overflow="hidden"
           _hover={{ boxShadow: "xl" }}
         >
            <AspectRatio ratio={4 / 3}>

           <Image src={product.image_url} borderRadius="lg" />
           </AspectRatio>
           <Stack p="4">
             <Heading size="md">{product.title}</Heading>
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
              </Box>
             <Text color="blue.600" fontSize="2xl" fontWeight="bold">
               $ {product.price}
             </Text>
             <Button
               variant="solid"
               colorScheme="blue"
               mt="2"
               _hover={{ bg: "blue.600" }}
             >
               Add to cart
             </Button>
           </Stack>
           <Divider />
         </Box>
       ))}
     </Grid>
   </div>
 );
};

export default Items;