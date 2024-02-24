import React, { useState, useEffect } from 'react';
import { api } from "../utils/utils";
import { Box, Grid, Text, Button, Image, AspectRatio } from '@chakra-ui/react';

const Home = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await api.get('/categorylist');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);
// Navigate to the products page
    const handleViewProducts = () => {
        window.location.href = '/pages/Products'; 
    };

    return (
        <div>
            <Box p="4">
                <h1>Home</h1>
                <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
                    {categories.map(category => (
                        <Box key={category.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <AspectRatio ratio={4 / 3}>
                                <Image src={category.image_url} objectFit="cover"/>
                            </AspectRatio>
                            <Box p="6">
                                <Text fontWeight="bold" fontSize="xl" mb="2">{category.name}</Text>
                                <Button colorScheme="blue" size="sm" onClick={handleViewProducts}>View</Button>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default Home;
