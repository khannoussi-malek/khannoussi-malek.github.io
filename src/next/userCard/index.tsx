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
  useColorModeValue,
} from '@chakra-ui/react';
import { GoCalendar, GoGlobe } from 'react-icons/go';

import { Card } from './Card';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { UserAvatar } from './UserAvatar';

export const UserCard = () => (
  <Box as="section" py="12" bg={useColorModeValue('gray.100', 'gray.800')}>
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
  </Box>
);
