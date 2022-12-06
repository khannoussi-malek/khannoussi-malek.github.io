import { useState } from 'react';

import { ImageProps as ChakraImageProps, chakra } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type Props = NextImageProps &
  Omit<ChakraImageProps, 'src' | 'width' | 'height'>;

const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    // Forward those props to Nextjs
    [
      'src',
      'fallbackSrc',
      'layout',
      'alt',
      'placeholder',
      'height',
      'width',
      'quality',
      'onError',
    ].includes(prop),
});

export const Image = (props: Props) => {
  const { src, fallbackSrc = '', ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <ChakraNextImage
      src={imgSrc}
      onError={() => setImgSrc(fallbackSrc)}
      {...rest}
    />
  );
};
