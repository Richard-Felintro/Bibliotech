import styled from "styled-components";

export const ContainerProfile = styled.SafeAreaView`

    background-color:#001B21;
    flex:1;
    align-items:center;
    margin-top:40px;
    padding:${props=> `${props.PadContainer}px`};
    /* justify-content:center; */
`

export const PhotoProfile = styled.View`

    /* border: 0.5px solid white; */
    /* background-color: #ffff; */
    border-radius: 100px;
    
    padding: 100px;
    margin-top:102px;
    justify-content:center;
    align-items:center;
   margin-bottom: 102px;
    width:181px;
    height:177px;
    background-size: cover;
  background-position: center;
`


export const PhotoContent = styled.View`
    height:177;
    width:181;
    align-items:center;
    margin-bottom:102px;
    flex-direction:row;
    justify-content:center;
    position: relative;
    /* background-image: url('../../../assets/Profile.jpg'); */
    /* background-size: cover;
  background-position: center; */
`
export const ViewPhotoIcon = styled.TouchableOpacity`
    height:30px;
    width:30px;
    background-color: #2C7DA0;
   justify-content:center;
   border-radius:5px;
    /* align-self: flex-end; */
    align-items:center;
    position: absolute;
    bottom: 15;
    right: 29;
`


export const ContainerImage = styled.View`
       height:177;
    width:181;
    /* position:center; */
    /* bottom: 100;
    right: 100; */
`
export const ImageComponent = styled.Image`
    width:181px;
    height:177px;
    border-radius:100px;
`




