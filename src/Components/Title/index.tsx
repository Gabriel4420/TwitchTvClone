import React, { ReactNode } from 'react';


import { Container } from './styles';

interface TitleProps {
  children: ReactNode;
  color:string;
}

function Title({ children ,color}: TitleProps) {
  return (
    <Container style={{color:color}}>
      {children}
    </Container>
  );
};

export default Title;
