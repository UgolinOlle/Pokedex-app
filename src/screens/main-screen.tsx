import * as React from 'react';
import {
  VStack,
  Divider,
  useColorModeValue
} from 'native-base';
import ThemeToggle from "../components/theme-toggle";
import MastHead from '../components/masthead';
import { PokeGridItem } from '../components/grid-poke';
import { getPokemon } from '../utils/api';

export default function MainScreen() {


  return (
    <VStack
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      flex={1}
      space={1}
    >
      <MastHead title='Hello Ugolin, how are you today ?' image={require('../assets/background.png')} darkImage={require('../assets/night-background.jpeg')}>
      </MastHead>
      <VStack
        alignItems='center'
        p={5}
      >
        <ThemeToggle />
        <VStack space={3} divider={<Divider />} w="90%">
          <VStack justifyContent="space-between">
            <PokeGridItem title='Test' image={require('../assets/masthead-illustration.jpg')}>
              Test
            </PokeGridItem>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  )
}
