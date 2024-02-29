import React, { useState, useEffect } from 'react';
import { api } from "../utils/utils";
import { Box, Grid, Text, Button, Image, AspectRatio, Link } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'

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

    return (
        <div>
            <Box p="8">
            <Heading> Our Collection</Heading>
                <Text fontSize="xx-large" mb="4"></Text>
                <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {categories.map(category => (
                        <Box key={category.id} borderWidth="1px" borderRadius="lg" overflow="hidden" sx={{ flex: '1 0 250px', minWidth: '250px' }}>
                            <AspectRatio ratio={6 / 3}>
                                <Image src={category.image_url} objectFit="cover" />
                            </AspectRatio>
                            <Box p="6">
                                <Link href="/products" textDecoration="none">
                                    <Text fontWeight="bold" fontSize="xl" mb="2">{category.name}</Text>
                                </Link>

                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default Home;
