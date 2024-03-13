import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  Text,
  Link, 
  Heading 
} from '@chakra-ui/react';
import { registerUser } from '../Redux/Signup/action';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student'
  });

  const { username, email, password, role } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)); 
    navigate("/");
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="8" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Heading as="h2" textAlign="center" mb="4">Signup</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
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
          <FormControl id="role">
            <FormLabel>Role</FormLabel>
            <Select
              name="role"
              value={role}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </Select>
          </FormControl>
          <Button colorScheme="blue" type="submit" mt={10}>
            Signup
          </Button>
          <Text textAlign="center">
            Already have an account?{' '}
            <Link as={RouterLink} to="/" color="blue.500">Login</Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default Signup;
