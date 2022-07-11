import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { VStack, Image } from 'native-base';

interface ImgProps {
  alt: String,
  image: ImageSourcePropType
}

const PokeImg = ({ alt, image }: ImgProps) => {
  return (
    <VStack h="50px" p={5}>
    </VStack>
  )
}

export default PokeImg;
