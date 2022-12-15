import * as React from 'react';

import {
  Box,
  HStack,
  Heading,
  Icon,
  Stack,
  Tag,
  Text,
  Wrap,
  chakra,
} from '@chakra-ui/react';
import { GoCalendar, GoGlobe } from 'react-icons/go';
import { Parallax } from 'react-scroll-parallax';

import { Card } from './Card';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { UserAvatar } from './UserAvatar';

export const SceneBanser = () => {
  return (
    <Box>
      <Parallax translateY={['-1000px', '-100px']}>
        <UserCard />
      </Parallax>
      <Parallax speed={-20}>
        <BannerDivider />
      </Parallax>
    </Box>
  );
};
export const BannerDivider = () => {
  return (
    <chakra.svg
      viewBox="0 0 1440 320"
      position="relative"
      bottom={0}
      zIndex="2"
      filter="drop-shadow( -9px -9px 16px rgba(0, 0, 0, .5))"
    >
      <path
        fill="#f1f5f9"
        fill-opacity="1"
        d="M0,32L40,74.7C80,117,160,203,240,208C320,213,400,139,480,128C560,117,640,171,720,186.7C800,203,880,181,960,149.3C1040,117,1120,75,1200,53.3C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </chakra.svg>
  );
};

export const UserCard = () => (
  <Box as="section" pt={{ base: '8', md: '12' }} overflowY="hidden">
    <Parallax
      style={{ zIndex: 1 }}
      translateY={['300px', '-70px']}
      opacity={[0.9, 1]}
    >
      <Card>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '4', md: '10' }}
        >
          <UserAvatar name="Samantha" src="./images/me.jpeg" isVerified />
          <CardContent>
            <CardHeader title="Khannoussi malek" action={null} />
            <Heading fontSize="lg" color="gray.500" mt="1" fontWeight="medium">
              software engineer
            </Heading>
            <Stack spacing="1" mt="2">
              <HStack fontSize="sm">
                <Icon as={GoGlobe} color="gray.500" />
                <Text>Tunisia, Djerba</Text>
              </HStack>
              <HStack fontSize="sm">
                <Icon as={GoCalendar} color="gray.500" />
                <Text>July, 1997</Text>
              </HStack>
            </Stack>

            <Text fontWeight="semibold" mt="8" mb="2">
              Interests
            </Text>
            <Wrap shouldWrapChildren>
              <Tag>Productivity</Tag>
              <Tag>Work</Tag>
              <Tag>Web Development</Tag>
              <Tag>Data science</Tag>
              <Tag>Problem solving</Tag>
              <Tag>Chess</Tag>
              <Tag>Games</Tag>
            </Wrap>
          </CardContent>
        </Stack>
      </Card>
    </Parallax>
    <BannerDivider />
  </Box>
);
