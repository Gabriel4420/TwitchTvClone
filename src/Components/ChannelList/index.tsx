import React, {ReactNode} from 'react';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';
import streamThumbnail from '../../images/category_lol.jpg';


interface ChannelListProps {
  children: ReactNode;
}


const ChannelList: React.FC = () => {
  const ChannelItem = ({children}: ChannelListProps) => (
    <ChannelContainer>
      <LeftSide>
        
        <Avatar source={streamThumbnail} />
        <Column>
          <Username numberOfLines={1}>{children}</Username>
          <Info>36 new videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChannelItem children={'Gabriel Rodrigues'} />
      <ChannelItem children={'Juliana '}/>
      <ChannelItem children={'Viviane Rodrigues'}/>
      <ChannelItem children={'Renato Cesar'}/>
      <ChannelItem children={'Roseli Vieira'}/>
      <ChannelItem children={'Guilherme'}/>
      <ChannelItem children={'Rocketseat'}/>
      <ChannelItem children={'Rocketseat'}/>
      <ChannelItem children={'Rocketseat'}/>
      <ChannelItem children={'Rocketseat'}/>
    </List>
  );
};

export default ChannelList;