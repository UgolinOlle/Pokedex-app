import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Box, VStack, Heading, Image, useColorModeValue } from 'native-base';

interface Props {
  title: String,
  image: ImageSourcePropType,
  darkImage: ImageSourcePropType,
  children: React.ReactNode
}

const MastHead = ({ title, image, darkImage, children }: Props) => {
  return (
    <VStack h="300px" pb={5} >
      <Image
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        w="full"
        h="300px"
        roundedBottomLeft='3xl'
        roundedBottomRight='3xl'
        resizeMode="cover"
        source={image}
        fallbackSource={darkImage}
        alt="Masthead image" />
      {children}
      <Box pt={8} />
      <Heading color={useColorModeValue('warmGray.50', 'primary.900')} p={6} size="xl">
        {title}
      </Heading>
    </VStack>
  )
}

export default MastHead;
