import { Button, ScrollView, Text, View } from "react-native";
import {
  ContainerImage,
  ContainerProfile,
  ImageComponent,
  PhotoContent,
  PhotoProfile,
  ViewIcon,
  ViewPhotoIcon,
} from "../../components/Container/Style";
import { MaterialIcons } from "@expo/vector-icons";
import { Input, ViewInput } from "../../components/Input/Style";
import { ButtonLight, ButtonText } from "../../components/Button/Style";
import { useState } from "react";
import { CameraModal } from "../../components/CameraModal/CameraModal";
export const Profile = ({ PadContainer = 10, navigation }) => {
  const [showCamera, setShowModalCamera] = useState(false);
  return (
    <ScrollView
      style={{
        width: "100%",
      }}
    >
      <ContainerProfile PadContainer={PadContainer}>
        {/* <PhotoContent> */}
        <PhotoProfile>
          <ContainerImage>
            <ImageComponent source={require("../../../assets/Profile2.jpg")} />
          </ContainerImage>
          <ViewPhotoIcon onPress={() => setShowModalCamera(true)}>
            <MaterialIcons name="add-a-photo" size={24} color="#ffff" />
          </ViewPhotoIcon>
        </PhotoProfile>
        {/* </PhotoContent> */}

        <ViewInput>
          <Input placeholder="NOME" />
        </ViewInput>
        <ViewInput>
          <Input keyboardType="numeric" placeholder="RA" />
        </ViewInput>
        <ViewInput>
          <Input placeholder="TURMA" />
        </ViewInput>

        <ButtonLight onPress={() => navigation.navigate("Login")}>
          <ButtonText>SAIR</ButtonText>
        </ButtonLight>
      </ContainerProfile>

      <CameraModal
        visible={showCamera}
        setShowModalCamera={setShowModalCamera}
      />
    </ScrollView>
  );
};
