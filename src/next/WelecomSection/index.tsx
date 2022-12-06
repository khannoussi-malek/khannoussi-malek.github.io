import { useEffect, useState } from 'react';

import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import AnimatedText from 'react-animated-text-content';
import { HiArrowRight } from 'react-icons/hi';

export const WelecomSection = () => {
  const [speciality, setSpeciality] = useState('');
  let specialityCompter = 0;
  const specialitys = [
    '👨🏻‍💻 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐒𝐭𝐮𝐝𝐞𝐧𝐭',
    '🌐 Web Developer',
    '📱 Mobile Developer',
    '🎨 Front-end developer',
    '💿 Back-end developer',
    '👨‍💻 Full-stack developer',
    '👨‍🔬 Data scientist',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      specialityCompter = specialityCompter + 1;
      specialityCompter >= specialitys.length && (specialityCompter = 0);
      return setSpeciality(specialitys[specialityCompter]);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Box
      as="section"
      bg={mode('gray.50', 'gray.800')}
      pb="24"
      pos="relative"
      px={{ base: '6', lg: '12' }}
    >
      <Box maxW="7xl" mx="auto" my="auto">
        <Box
          maxW={{ lg: 'md', xl: 'xl' }}
          pt={{ base: '10', lg: '20' }}
          pb={{ base: '16', lg: '24' }}
        >
          <HStack
            className="group"
            as="a"
            href="#"
            px="2"
            py="1"
            bg={mode('gray.200', 'gray.700')}
            rounded="full"
            fontSize="sm"
            mb="8"
            display="inline-flex"
            minW="18rem"
          >
            <Badge
              px="3"
              py="1"
              variant="solid"
              colorScheme="cyan"
              rounded="full"
              textTransform="capitalize"
            >
              📋
            </Badge>
            <Box fontWeight="medium">Small intreduction about me</Box>
            <Box
              aria-hidden
              transition="0.2s all"
              _groupHover={{ transform: 'translateX(2px)' }}
              as={HiArrowRight}
              display="inline-block"
            />
          </HStack>
          <Heading
            as="h1"
            size="3xl"
            lineHeight="1"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Who i am{' '}
            <Flex h="40" alignItems="center">
              <Box
                as={AnimatedText}
                color={mode('blue.500', 'blue.300')}
                bg="transparent"
                type="chars"
                interval={0.05}
                duration={0.8}
                animation={{
                  y: '100px',
                  ease: 'ease-in-out',
                }}
                lineHeight="center"
              >
                {speciality}
              </Box>
            </Flex>
          </Heading>
          <Text
            mt={4}
            fontSize="xl"
            fontWeight="medium"
            color={mode('gray.600', 'gray.400')}
          >
            Experienced problem solver with a strong background in developing
            award-winning applications for a diverse clientele.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" mt="8">
            <Button
              size="lg"
              colorScheme="blue"
              height="14"
              px="8"
              fontSize="md"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              bg="white"
              color="gray.800"
              _hover={{ bg: 'gray.50' }}
              height="14"
              px="8"
              shadow="base"
              fontSize="md"
            >
              Talk to an expert
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        pos={{ lg: 'absolute' }}
        insetY={{ lg: '0' }}
        insetEnd={{ lg: '0' }}
        bg="gray.50"
        w={{ base: 'full', lg: '50%' }}
        height={{ base: '96', lg: 'full' }}
        sx={{
          clipPath: { lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' },
        }}
        maxH="80vh"
      >
        <Img
          h="100%"
          w="100%"
          objectFit="cover"
          objectPosition="top"
          src="/images/rewards.jpg"
          alt="Lady working"
        />
      </Box>
    </Box>
  );
};
