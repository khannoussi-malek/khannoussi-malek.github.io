import * as React from 'react';

import {
  AspectRatio,
  Box,
  Circle,
  HStack,
  IconButton,
  IconButtonProps,
  Image,
  Skeleton,
  Stack,
  StackProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import { Carousel, CarouselSlide, useCarousel } from '../Carousel/index';

interface GalleryProps {
  images: any[];
  aspectRatio?: number;
  rootProps?: StackProps;
}

export const Gallery = (props: GalleryProps) => {
  const { images, aspectRatio = 4 / 3, rootProps } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [ref, slider] = useCarousel({
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  });

  const hasPrevious = currentSlide !== 0;
  const hasNext = currentSlide < images.length - 1;

  return (
    <Stack spacing="4" {...rootProps}>
      <Box
        position="relative"
        sx={{
          _hover: {
            '> button': {
              display: 'inline-flex',
            },
          },
        }}
      >
        <Carousel ref={ref}>
          {images.map((image, i) => (
            <CarouselSlide key={i}>
              <AspectRatio
                ratio={aspectRatio}
                transition="all 200ms"
                opacity={currentSlide === i ? 1 : 0.4}
                _hover={{ opacity: 1 }}
              >
                <Image
                  src={image.src}
                  objectFit="cover"
                  alt={image.alt}
                  fallback={<Skeleton />}
                />
              </AspectRatio>
            </CarouselSlide>
          ))}
        </Carousel>
        {hasPrevious && (
          <CarouselIconButton
            pos="absolute"
            left="3"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.prev()}
            icon={<IoChevronBackOutline />}
            aria-label="Previous Slide"
          />
        )}

        {hasNext && (
          <CarouselIconButton
            pos="absolute"
            right="3"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.next()}
            icon={<IoChevronForwardOutline />}
            aria-label="Next Slide"
          />
        )}
        <HStack
          position="absolute"
          width="full"
          justify="center"
          bottom="0"
          py="4"
        >
          {images.map((_, index) => (
            <Circle
              key={index}
              size="2"
              bg={currentSlide === index ? 'white' : 'whiteAlpha.400'}
            />
          ))}
        </HStack>
      </Box>
    </Stack>
  );
};

const CarouselIconButton = (props: IconButtonProps) => (
  <IconButton
    display="none"
    fontSize="lg"
    isRound
    boxShadow="base"
    bg={useColorModeValue('white', 'gray.800')}
    _hover={{
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    _active={{
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    _focus={{ boxShadow: 'inerhit' }}
    _focusVisible={{ boxShadow: 'outline' }}
    {...props}
  />
);
