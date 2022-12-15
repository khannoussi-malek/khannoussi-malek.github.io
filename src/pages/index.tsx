import React from 'react';

import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Skills } from '@/next/Skills';
import { WelecomSection } from '@/next/WelcomSection';
import { Banner } from '@/next/banner';
import { Footer } from '@/next/footer';
import WithSubnavigation from '@/next/topBar';
import { BannerDivider, SceneBanser, UserCard } from '@/next/userCard';

const Index = () => {
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
          <Skills />
          {/* <VerticalSteps /> //TODO this part should be done after skills section */}
          <UserCard />
          <Footer />
        </ParallaxProvider>
      </Box>
    </>
  );
};
export default Index;
