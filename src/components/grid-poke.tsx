import React from 'react';
import { Text, Stack, AspectRatio, Box, Image, Heading, VStack } from 'native-base';
import { ImageSourcePropType } from 'react-native';

interface PokeAvatarProps {
  title: string,
  image: ImageSourcePropType
}

interface PokeGridProps {
  title: string,
  image: ImageSourcePropType
  children: React.ReactNode
}

export const PokeAvatar = ({ title, image }: PokeAvatarProps) => {
  return (
    <VStack>
      <Image
        source={image}
        alt={title}
        w='100'
        h='100'
        borderRadius={100}
        resizeMode='cover'
      />
    </VStack>
  )
}

export const PokeGridItem = ({ title, image, children }: PokeGridProps) => {
  return (
    <Box
      maxW='500'
      maxH="200"
      rounded="lg"
      overflow="hidden"
      mt={4}
      mb={2}
    >
      <PokeAvatar title={title} image={image} />
      <Box alignItems='center'>
        <Text pt={2} fontSize={18} fontWeight='600'>
          {children}
        </Text>
      </Box>
    </Box>
  )
}
