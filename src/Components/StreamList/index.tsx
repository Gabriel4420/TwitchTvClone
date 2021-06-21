import React from 'react';


import streamThumbnail from '../../images/stream_thumbnail.jpg';
import { RedCircleStream } from '../CategoryList/styles';

import { 
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
  
} 
from './styles';



const StreamList: React.FC = () => {
  
  const StreamItem: React.FC = () => (
      <StreamContainer>
        
        <StreamThumbnail source={streamThumbnail}/>
        <RedCircleStream/>
        <StreamColumn>
          <StreamRow>
            <StreamHeader>
              
              <StreamAvatar />
              <StreamUserName numberOfLines={1}>@gabriel4420</StreamUserName>
            </StreamHeader>

            <StreamDescription numberOfLines={1}>
                Front-end com nextjs chackra ui e graphql
            </StreamDescription>

            <StreamCategory numberOfLines={1}>
                Ciência
            </StreamCategory>
          </StreamRow>
          <TagRow>
            <TagView>
              <TagText>Portuguese</TagText>
            </TagView>
            <TagView>
              <TagText>Web dev</TagText>
            </TagView>
          </TagRow>
        </StreamColumn>
      </StreamContainer>
  )
  
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
