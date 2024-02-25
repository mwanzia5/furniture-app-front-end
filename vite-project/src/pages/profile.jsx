import { Grid, Box, Badge, Spinner, Text, Avatar } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { api} from "../assets/utils";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await api.get("/users");
      console.log (response.data);
      setProfiles(response.data);
      setIsLoading(false);
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
      <h1>Profile🗿 </h1>
      {profiles.map((profile) => (
        <Grid key={profile.id}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" display="flex">
            <Avatar src={profile.avatarUrl} alt={profile.username} size="xl" />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {profile.username}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {profile.email} 
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