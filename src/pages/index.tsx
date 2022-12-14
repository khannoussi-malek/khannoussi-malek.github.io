import React from 'react';

import { Box } from '@chakra-ui/react';
import Head from 'next/head';

import { VerticalSteps } from '@/next/VerticalSteps';
import { WelecomSection } from '@/next/WelcomSection';
import { Banner } from '@/next/banner';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';
import { UserCard } from '@/next/userCard';

const Index = () => {
  return (
    <>
      <Head>
        <title>Start UI</title>
      </Head>
      <Box minW="100%" minH="100vh" userSelect="none">
        <WithSubnavigation />
        <Banner />
        <WelecomSection />
        <UserCard />
        {/* <VerticalSteps /> //TODO this part should be done after skills section */}
        <Footer />
      </Box>
    </>
  );
};
export default Index;
