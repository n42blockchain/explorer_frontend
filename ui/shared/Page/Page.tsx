import React from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';

import Navigation from 'ui/navigation/Navigation';
import Header from 'ui/header/Header';

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <HStack
      w="100%"
      minH="100vh"
      spacing={ 16 }
      alignItems="stretch"
      paddingRight="60px"
    >
      <Navigation/>
      <VStack width="100%">
        <Header/>
        <Box
          as="main"
          borderRadius="base"
          w="100%"
          overflow="hidden"
          py={ 8 }
        >
          { children }
        </Box>
      </VStack>
    </HStack>
  );
};

export default Page;
