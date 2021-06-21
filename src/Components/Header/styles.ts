import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const TextSessionNamed = styled.Text`
    font-size:14px;
    color:${colors.green};
    font-family:roboto_500;
    margin-left:-60px;
    

    padding-right:14px;

`;

export const Container = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    padding-top:10px;
    padding-right:14px;
    padding-bottom:20px;

`;

export const Avatar = styled.TouchableOpacity`
    width:32px;
    height:32px;
    border-radius:16px;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
   


`; 

export const PhotoAvatar = styled.Image`
    width:32px;
    height:32px;
    border-radius:30px ;
    overlay-color:${colors.primary};
   


`; 

export const OnlineStatus = styled.View`
    background:${colors.green}
    width:10px;
    height:10px;
    border-radius:16px;
    border: 2px solid ${colors.primary};

    position:absolute;
    bottom:0;
    right:0;
`; 
export const RightSide = styled.View`
    flex-direction:row;
    align-items:center;
`; 
export const Button = styled.TouchableOpacity`
    margin-left:20px;
`;
