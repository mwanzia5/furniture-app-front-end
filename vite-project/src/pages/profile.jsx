import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { api } from "../assets/utils";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make a request to backend API endpoint to fetch user data
        const response = await api.get('/users'); 
        console.log(response)
        setUserData(response);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
         // Cleanup function
    fetchUserData();
    return () => {
    };
  }, []);

  return (
    <Box className="profile-container">
      {/* Render user data here */}
      {setUserData.map(users => (
         <Box key= {users.id}>
         {/* Change to icon */}
         <Box mb={4}>
           <Image
             src={userData.profileImage}
             alt={userData.username}
             borderRadius="full"
             boxSize="150px"
             objectFit="cover"
           />
         </Box>
         <Heading as="h2">{users.username}</Heading>
         <Text>Email: {users.email}</Text>
       </Box>
      ))}
    </Box>
  );
}

export default Profile;
