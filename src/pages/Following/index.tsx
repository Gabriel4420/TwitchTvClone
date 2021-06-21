import React, { Children } from 'react';

import { View, FlatList  } from 'react-native';

import Header from '../../Components/Header';
import Heading from '../../Components/Heading';
import CategoryList from '../../Components/CategoryList';
import StreamList from '../../Components/StreamList';
import Title from '../../Components/Title';
import colors from '../../styles/colors';
import { Container, Wrapper, Main } from './styles';
import ChannelList from '../../Components/ChannelList';


interface Item{
  key:string,
  render: ()  => JSX.Element, 
  isTitle ? : boolean;
}

const Following = () => {
  
  /* Calculos relacionados ao Behavior
    pagina.
  */
  const {data, indices} = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title color="#14b866">Followed Categories</Title>,
        isTitle: true
      },
      {
        key:'C1',
        render: () => <CategoryList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title color="#ec1414">LIVE CHANNELS </Title>,
        isTitle: true
      },
      {
        key:'C2',
        render: () => <StreamList />,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title color="#bf94ff">CONTINUE WATCHING</Title>,
        isTitle: true
      },
      {
        key:'C3',
        render: () => <StreamList/>,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title color="#FFDB58">Offline Channels</Title>,
        isTitle: true
      },
      {
        key:'C4',
        render: () => <ChannelList /> ,
      }
    ];

    //array que contem apenas os indices dos elementos que são titulos
    const indices: number[] = [];

    items.forEach((item,index) => item.isTitle && indices.push(index));
    return {
      data: items,
      indices

    }
    
  },[]);


  return (
    <Wrapper>
      <Container>

        <Header children={'Gabriel4420'} />
        <Main >
          <FlatList<Item> 
            data={data}
            renderItem = {({item}) => item.render()}
            keyExtractor = {item => item.key}
            stickyHeaderIndices = {indices}
            //refresh effects
            onRefresh={() =>{}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
