import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #001b21;
  justify-content: center;
  align-items: center;
`;

export const ContainerAlternate = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #001b21;
  align-items: center;
`;

export const ContainerRow = styled.View`
  width: 80%;
  height: fit-content;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerColumn = styled.View`
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
  gap: 32px;
`;

export const ContainerText = styled(ContainerInput)`
  gap: 8px;
  margin-bottom: 32px;
`;

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: ["#2C7DA0", "#012141"],
  start: { x: -0.05, y: 0.95 },
  end: { x: 0.9, y: -0.1 },
})`
  margin-top: 10%;
  margin-bottom: 10%;
  width: 100%;
  height: 100%;
  background-color: #3faad7;

  justify-content: center;
  align-items: center;
`;

export const ContainerGradientDark = styled(LinearGradient).attrs({
  colors: ["#012A4A", "#000511"],
  start: { x: -0.05, y: 0.95 },
  end: { x: 0.9, y: -0.1 },
})`
  width: 100%;
  height: 100%;
  background-color: #001b21;
  align-items: center;
  justify-content: center;
`;

export const ContainerMain = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #001b21;
`;

export const ContainerUser = styled.ScrollView`
  height: 80%;
`;

export const ContainerProfile = styled.SafeAreaView`
  background-color: #001b21;
  flex: 1;
  align-items: center;
  margin-top: 40px;
  padding:${(props) => `${props.PadContainer}px`};
`;

export const PhotoProfile = styled.View`
  /* border: 0.5px solid white; */
  /* background-color: #ffff; */
  border-radius: 100px;

  padding: 100px;
  margin-top: 102px;
  justify-content: center;
  align-items: center;
  margin-bottom: 102px;
  width: 181px;
  height: 177px;
  background-size: cover;
  background-position: center;
`;

export const PhotoContent = styled.View`
  height: 177;
  width: 181;
  align-items: center;
  margin-bottom: 102px;
  flex-direction: row;
  justify-content: center;
  position: relative;
  /* background-image: url('../../../assets/Profile.jpg'); */
  /* background-size: cover;
  background-position: center; */
`;
export const ViewPhotoIcon = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  background-color: #2c7da0;
  justify-content: center;
  border-radius: 5px;
  /* align-self: flex-end; */
  align-items: center;
  position: absolute;
  bottom: 15;
  right: 29;
`;

export const ContainerImage = styled.View`
  height: 177;
  width: 181;
  /* position:center; */
  /* bottom: 100;
    right: 100; */
`;
export const ImageComponent = styled.Image`
  width: 181px;
  height: 177px;
  border-radius: 100px;
`;
