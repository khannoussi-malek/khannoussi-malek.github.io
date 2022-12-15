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
  useColorModeValue,
} from '@chakra-ui/react';
import { GoCalendar, GoGlobe } from 'react-icons/go';
import { Parallax } from 'react-scroll-parallax';

import { Card } from './Card';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { UserAvatar } from './UserAvatar';

export const BannerDivider = () => {
  return (
    <chakra.svg
      viewBox="0 0 1440 320"
      position="relative"
      bottom={-2}
      zIndex="2"
      filter={useColorModeValue(
        'drop-shadow( -9px -9px 16px rgba(0, 0, 0, .5))',
        'drop-shadow( -9px -9px 20px rgba(250, 250, 250, .5))'
      )}
    >
      <path
        fill={useColorModeValue('#f1f5f9', '#334155')}
        fillOpacity="1"
        d="M0,32L40,74.7C80,117,160,203,240,208C320,213,400,139,480,128C560,117,640,171,720,186.7C800,203,880,181,960,149.3C1040,117,1120,75,1200,53.3C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </chakra.svg>
  );
};

export const UserCard = () => {
  return (
    <Box as="section" pt={{ base: '8', md: '12' }} overflowY="hidden">
      <Parallax style={{ zIndex: 1 }} translateY={['-100vh', '150vh']}>
        <Card my={20} shadow="xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '4', md: '10' }}
          >
            <UserAvatar name="Samantha" src="./images/me.jpeg" isVerified />

            <CardContent>
              <CardHeader title="Khannoussi malek" action={null} />

              <Heading
                fontSize="lg"
                color="gray.500"
                mt="1"
                fontWeight="medium"
              >
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
};
