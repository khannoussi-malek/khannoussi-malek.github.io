import React from 'react';

import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { WelecomSection } from '@/next/WelcomSection';
import { Banner } from '@/next/banner';
import { Footer } from '@/next/footer';
import { Me as NextJsMe } from '@/next/me';
import WithSubnavigation from '@/next/topBar';
import { UserCard } from '@/next/userCard';

const Me = () => {
  return (
    <>
      <Head>
        <title>🚀Malek☄️</title>
      </Head>
      <Box minW="100%" minH="100vh" userSelect="none">
        <ParallaxProvider>
          <WithSubnavigation />
          <Banner />
          <WelecomSection />
          <UserCard />
          <NextJsMe />
          <UserCard />
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Me;
