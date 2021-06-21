import React,{ReactNode} from 'react';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';

const img = '../../images/sasuke.gif'; 

import { Container,TextSessionNamed, Avatar, PhotoAvatar, OnlineStatus,RightSide, Button  } from './styles';

interface nameProps {
  children: string
}


const Header = ({children}:nameProps) => {
  

  return (
    <Container>
     <Avatar >
       <PhotoAvatar source={require(img)}/>
       <OnlineStatus />
     </Avatar>

     <TextSessionNamed children={children} />

     <RightSide>

       <Button>
         <MaterialIcons
            name="notifications-none"
            size={26}
            color = {colors.black}
         />
       </Button>

       <Button>
         <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color = {colors.black}
         />
       </Button>

       <Button>
         <Feather
            name="search"
            size={26}
            color = {colors.black}
         />
       </Button>

     </RightSide>
     
    </Container>
  );
};

export default Header;
