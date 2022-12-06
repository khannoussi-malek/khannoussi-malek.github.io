import React from 'react';

import { Box } from '@chakra-ui/react';

import { WelecomSection } from '@/next/WelecomSection';
import { Banner } from '@/next/banner';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';
import { UserCard } from '@/next/userCard';

const Index = () => {
  return (
    <>
      <Box minW="100%" minH="100vh">
        <WithSubnavigation />
        <Banner />
        <WelecomSection />
        <UserCard />
        <Footer />
      </Box>
    </>
  );
};
export default Index;
