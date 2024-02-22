import { useFormik } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { BASE_URL } from "../assets/utils";
import { User } from "../components/Auth";

function SignIn() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(User);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch(`${BASE_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await res.json();
        console.log(data);

        if (data.status === "fail") {
          toast.error(data.message);
          } else if (data.status === "success") {
          toast.success(data.message);
          resetForm();
          localStorage.setItem("session", JSON.stringify(data));
          setIsAuthenticated(true);
          navigate("/home");
        }
      } catch (error) {
        toast.error("Unable to login. Please try again later.");
      }
      
    },
  });

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="purple"
            >
              Remember me?
            </Checkbox>
            <Button type="submit">Login</Button>
        <p>
          Dont have an account?
          <Link to="/sign-up">Signup</Link>
        </p>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default SignIn;
