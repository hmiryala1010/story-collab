import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  VStack,
  Heading,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box maxW="sm" mx="auto" mt={20} p={6} borderWidth="1px" borderRadius="md">
      <Heading mb={4} size="md">Login</Heading>
      <VStack spacing={3}>
        <FormControl>
          <FormLabel>Enter your Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Enter your Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleLogin}>Login</Button>
      </VStack>
    </Box>
  );
}

export default Login;
