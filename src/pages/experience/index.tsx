import React from 'react';

import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { VerticalSteps } from '@/next/VerticalSteps';
import { WelecomSection } from '@/next/WelcomSection';
import { Banner } from '@/next/banner';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';
import { UserCard } from '@/next/userCard';

const Experience = () => {
  return (
    <Box>
      <Head>
        <title>🚀Malek☄️</title>
      </Head>
      <Box minW="100%" minH="100vh" userSelect="none">
        <ParallaxProvider>
          <WithSubnavigation />
          <Banner />
          <WelecomSection />
          <UserCard />
          <VerticalSteps />
          <UserCard />
          <Footer />
        </ParallaxProvider>
      </Box>
    </Box>
  );
};

export default Experience;
