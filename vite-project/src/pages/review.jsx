import React, { useState, useEffect } from "react";
import { Card, Box, Flex, CardHeader, Avatar, Heading, Input, Button } from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icons";
import { api } from '../utils/utils';


function ReviewList() {
 // State variables
 const [reviews, setReviews] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [text, setText] = useState("");
 const [rating, setRating] = useState(0);


 // Fetch reviews from an API when the component mounts
 useEffect(() => {
   const fetchReviews = async () => {
     try {
       // Make API call to fetch reviews using the api instance
       const response = await api.get("/review");
       setReviews(response.data);
       setLoading(false);
     } catch (error) {
       console.error("Error fetching reviews:", error);
       setError("Error fetching reviews. Please try again later.");
       setLoading(false);
     }
   };


   fetchReviews();
 }, []);


 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     const response = await api.post("/review", { text, rating });
     const newReview = response.data;
     // Update the state with the new review including the review_id
     setReviews([...reviews, newReview]); // No need to destructure further
     setText(""); // Clear the text input
     setRating(0); // Reset the rating input
   } catch (error) {
     console.error("Error posting review:", error);
     setError("Error posting review. Please try again later.");
   }
 };


 return (
   <div>
     <div>
      <p>Please rate this product:</p>
       {/* Input fields for posting reviews */}
       <Input
         placeholder="Enter your review"
         value={text}
         onChange={(e) => setText(e.target.value)}
       />
       <Input
         placeholder="Enter rating"
         type="number"
         value={rating}
         onChange={(e) => setRating(e.target.value)}
       />
       <Button onClick={handleSubmit}>Submit Review</Button>
     </div>
     {loading ? (
       <div>Loading...</div>
     ) : error ? (
       <div>{error}</div>
     ) : (
       <div>
         {reviews.map((review) => (
           <Card key={review.id} maxW="md" margin="20px">
             <CardHeader>
               <Flex spacing="4">
                 <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                   <Avatar name={review.author} src={review.avatar} />


                   <Box>
                     <Heading size="sm">{review.author}</Heading>
                     <div>
                       <p>{review.text}</p>
                       <p>{review.rating}</p>
                     </div>
                   </Box>
                 
                 </Flex>
                 {/* <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={""} /> */}
               </Flex>
             </CardHeader>
           </Card>
         ))}
       </div>
     )}
   </div>
 );
}


export default ReviewList;


