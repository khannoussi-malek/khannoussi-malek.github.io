import { FC } from 'react';

import {
  Badge,
  Box,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFileBinary } from 'react-icons/bs';
import {
  FaGitAlt,
  FaGithubAlt,
  FaGitlab,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaVuejs,
} from 'react-icons/fa';
import { GrDocker } from 'react-icons/gr';
import {
  IoLogoAngular,
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoIonic,
  IoLogoJavascript,
  IoLogoLaravel,
  IoLogoReact,
} from 'react-icons/io5';
import {
  SiApachecordova,
  SiBootstrap,
  SiChakraui,
  SiCsharp,
  SiCypress,
  SiDjango,
  SiGnubash,
  SiJava,
  SiJest,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPhp,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { Parallax } from 'react-scroll-parallax';

import { Icon } from '@/components/Icons';

interface SkillProps extends StackProps {
  icon: FC<React.PropsWithChildren<unknown>>;
  text: string;
  href?: string;
}

const Skill: FC<SkillProps> = ({ icon, text, href = '/' }) => {
  return (
    <Parallax scale={[0, 1.6]} opacity={[0.4, 1]}>
      <Stack
        as={Link}
        href={href}
        w="fit-content"
        textAlign="center"
        alignItems="center"
        my="4"
        overflowX="hidden"
        maxW="100vw"
      >
        <Icon
          fontSize="80"
          icon={icon}
          color={useColorModeValue('purple.700', 'purple.200')}
        />
        <Badge
          as={Text}
          variant="outline"
          colorScheme={useColorModeValue('green', 'purple')}
          borderRadius="xl"
          fontWeight="bold"
          fontSize="3xl"
        >
          {text}
        </Badge>
      </Stack>
    </Parallax>
  );
};
export const Skills = () => {
  const skills = [
    { icon: AiFillHtml5, text: 'HTML', href: '/blog/html' },
    { icon: IoLogoCss3, text: '🎨CSS', href: '/blog/css' },
    { icon: IoLogoJavascript, text: 'JavaScript🌠', href: '/blog/javascript' },
    { icon: SiTypescript, text: '✨TypeScript✨', href: '/blog/typescript' },
    { icon: SiPhp, text: 'PHP' },
    { icon: IoLogoReact, text: '⚛️React🔥', href: '/blog/react' },
    { icon: SiChakraui, text: '⚡️Chakra-Ui' },
    {
      icon: TbBrandReactNative,
      text: 'React-query',
      href: '/blog/reactNative',
    },
    { icon: IoLogoAngular, text: 'Anguler' },
    { icon: IoLogoIonic, text: 'Ionic' },
    { icon: SiMysql, text: 'MyS QL' },
    { icon: SiMicrosoftsqlserver, text: 'Oracle' },
    { icon: SiPostgresql, text: 'Postgresql' },
    { icon: FaGitAlt, text: 'Git' },
    { icon: FaGithubAlt, text: '🦊Github' },
    { icon: FaGitlab, text: '☄️Gitlab' },
    { icon: SiMongodb, text: 'Mongo DB' },
    { icon: IoLogoFirebase, text: '🔥Firebase' },
    { icon: GrDocker, text: '🐋Docker' },
    { icon: SiSpringboot, text: 'Spring Boot' },
    { icon: IoLogoLaravel, text: 'Laravel' },
    { icon: FaLinux, text: '🐧Linux' },
    { icon: FaNodeJs, text: 'Noode JS' },
    { icon: FaPython, text: '🐍Python' },
    { icon: SiDjango, text: 'Django' },
    { icon: FaVuejs, text: 'Vue' },
    { icon: SiApachecordova, text: 'Cordova' },
    { icon: SiBootstrap, text: 'BootStrap' },
    { icon: SiCsharp, text: 'C#' },
    { icon: SiJava, text: 'Java' },
    { icon: SiGnubash, text: 'Bash' },
    { icon: SiJest, text: '🕵Jest🕵' },
    { icon: SiCypress, text: '🕵Cypres🕵' },
    { icon: SiNetlify, text: 'Netlify' },
    { icon: BsFileBinary, text: 'Assembly🤭' },
  ];
  return (
    <Box
      minH="100vh"
      maxW="100vw"
      bg={useColorModeValue('gray.100', 'gray.700')}
      mb={8}
      mt={-4}
      overflowX="hidden"
    >
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 3, lg: 4 }}
        spacing={10}
        justifyItems="center"
      >
        {skills?.map((props, index) => (
          <Skill {...props} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
