import styled from 'styled-components/native';
import colors from '../../styles/colors';

  export const List = styled.ScrollView.attrs({
      horizontal: true,
  })`
    padding: 8px 0px 24px;
  
  `

  export const CategoryContainer = styled.TouchableOpacity`

    margin-right:20px;
  
  `

  export const CategoryImage = styled.Image`
    width: 98px;
    height: 130px;
  
  
  
  `

  export const CategoryName = styled.Text`
    margin-top: 5px;
    max-width:98px;
    color:${colors.black};
    font-family: roboto_700;
    font-size:14px;
    
  `

  export const CategoryStatus = styled.View`
    flex-direction:row;
    align-items:center;
   

  
  `

  export const RedCircle = styled.View`
    background: ${colors.red};
    width:9px;
    height:9px;
    border-radius:4.5px;
  `
  export const RedCircleStream = styled.View`
  background: ${colors.red};
  width:9px;
  height:9px;
  border-radius:4.5px;
  
  top:58px;
  left:-10px;
  bottom:0;
  `

  export const Info = styled.Text`
    margin-left:4px;
    padding-bottom:1px;
    color:${colors.gray};
    font-family:roboto_500;
  
  `



