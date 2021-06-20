import React from 'react';
import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Wrapper, Heading } from './styles';

interface ComingSoonProps {
  children: ReactNode;
}

const ComingSoon = ({ children }: ComingSoonProps) => {
  return (
    <Wrapper>

      <Heading>ComingSoon</Heading>
      {children}

    </Wrapper>
  );
};

export default ComingSoon;
