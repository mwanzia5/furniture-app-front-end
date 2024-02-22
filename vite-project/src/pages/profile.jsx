import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import axios from "axios";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make a request to backend API endpoint to fetch user data
        const response = await axios.get('api/user'); 
        setUserData(response.data);
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
      {userData && (
        <Box>
          {/* Styling for profile image */}
          <Box mb={4}>
            <Image
              src={userData.profileImage}
              alt={userData.full_name}
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
            />
          </Box>
          <Heading as="h2">{userData.full_name}</Heading>
          <Text>Email: {userData.email}</Text>
        </Box>
      )}
    </Box>
  );
}

export default Profile;
