import {
  Grid,
  Box,
  Badge,
  Spinner,
  Text,
  Avatar,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, TimeIcon } from "@chakra-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { api } from "../utils/utils";
import { AuthContext } from "../components/Auth";


const Profile = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  console.log(user);
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchProfile = async () => {
    try {
      // Ensure that user is defined and has an id property
      if (user && user.id) {
        const response = await api.get(`/users/${user.id}`);
        setProfiles([response.data]);
        setIsLoading(false);
      } else {
        console.error("User or user id is not available");
        setError(new Error("User or user id is not available"));
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching profile", error);
      setError(error);
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchProfile();
  }, []);


  if (isLoading) {
    return <Spinner size="xl" />;
  }


  if (error) {
    return <Text>Error fetching profiles. Please try again later.</Text>;
  }


  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Your profile
      </h1>
      <Grid gap={6} templateColumns="repeat(auto-fit, minmax(300px, 1fr))">
        {profiles.map((profile) => (
          <Box
            key={profile.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            <Avatar src={profile.avatarUrl} alt={profile.username} size="xl" />
            <Box p="6">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {profile.username}
              </Badge>
              <Flex alignItems="center" mt="2">
                <EmailIcon mr="2" />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="tight"
                  color="gray.600"
                >
                  {profile.email}
                </Text>
              </Flex>
              <Flex alignItems="center" mt="2">
                <PhoneIcon mr="2" />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="tight"
                  color="gray.600"
                >
                  {profile.phone_number}
                </Text>
              </Flex>
              <Flex alignItems="center" mt="2">
                <TimeIcon mr="2" />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="tight"
                  color="gray.600"
                >
                  Created At: {profile.created_at}
                </Text>
              </Flex>
            </Box>
          </Box>
        ))}
 
     </Grid>
    </div>
  );
};


export default Profile;