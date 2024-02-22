import { Grid, Box, Badge } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { api } from "../assets/utils";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfile = async () => {
    try {
      const response = await api.get("/users");
      setProfiles(response.data);
    } catch (error) {
      console.error("Error fecthing profile", error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile🗿 </h1>
      {profiles.map((profile) => (
        <Grid key={profile.id}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {profile.userName}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {profile.email} beds &bull; {profile.role} baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {profile.phone_number}
              </Box>

              <Box>{profile.created_at}</Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </div>
  );
};

export default Profile;