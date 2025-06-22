import { Box, Text } from '@chakra-ui/react';
import Login from './components/Login';

function App() {
  return (
    <><Box p={8}>
      <Text fontSize="xl" color="teal.500">
        ✅ Chakra UI is working!
      </Text>
    </Box><div>
        <Login />
      </div></>
  );
}

export default App;
