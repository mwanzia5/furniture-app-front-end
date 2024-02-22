import React from "react";
import{useState,useEffect}from "react";
import { Card ,Box,Flex,CardHeader,IconButton,Button,Avatar,Heading,CardBody} from "@chakra-ui/react";


function ReviewList() {
  return (
    <div>
      <Card maxW='md'>
    <CardHeader>
      <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  
          <Box>
            <Heading size='sm'>Segun Adebayo</Heading>
            <div>
              <h1>nice couch i would love to come back again</h1>
              </div>
          </Box>
        </Flex>
        <IconButton
          variant='ghost'
          colorScheme='gray'
          aria-label='See menu'
          icon={""}
        />
      </Flex>
    </CardHeader>
    <CardBody>
      
        
      
    </CardBody>
    </Card>
  </div>
  )
}

export default ReviewList;
