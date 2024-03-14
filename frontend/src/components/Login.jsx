import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; 
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Link, 
  Heading, 
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from "../Redux/Login/action"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false); 

  const {token,role}=useSelector(state=>state.loginReducer)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    if(!token){
      
      setShowAlert(true);
    }
    else if (role=="admin"){
       navigate("/admin-dashboard")
      }
      else{
        navigate("/")
      }
    
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="8" borderWidth="1px" borderRadius="lg" boxShadow="lg">
    
      <Heading as="h2" textAlign="center" mb="4">Login</Heading>
    
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Input bgColor={'blue'} color="white" type="submit" value={"Login"} mt={10}/>
            {/* Login
          </Input> */}
          {showAlert && (
            <Alert status="error" mt="4">
              <AlertIcon />
              Invalid credentials
            </Alert>
          )}
          <Text textAlign="center">
            Don't have an account?{' '}
            <Link as={RouterLink} to="/signup" color="blue.500">Signup</Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
