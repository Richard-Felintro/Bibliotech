import { Button, ScrollView, Text, View } from "react-native";
import {
  ContainerImage,
  ContainerProfile,
  ImageComponent,
  PhotoContent,
  PhotoProfile,
  Scroll,
  ViewIcon,
  ViewPhotoIcon,
} from "../../components/Container/Style";
import { MaterialIcons } from "@expo/vector-icons";
import { Input, ViewInput } from "../../components/Input/Style";
import { ButtonLight, ButtonText } from "../../components/Button/Style";
import { useEffect, useState } from "react";
import { CameraModal } from "../../components/CameraModal/CameraModal";
import { ModalLogout } from "../../components/Modal/Index";
import { ProfileInfo } from "../../utils/Auth";
import api from "../../services/service";



export const Profile = ({ PadContainer = 10, navigation }) => {

  const [showLogout, setShowLogout] = useState(false);
  const [showCamera, setShowModalCamera] = useState(false);
  const [perfilUsuario, setPerfilUsuario] = useState("")
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [idUsuario, setIdUsuario] = useState("");
  useEffect(()=>{
      ProfileInfo()
      .then(token=>{
        setPerfilUsuario(token.perfil)
        setIdUsuario(token.id)
        CarregarDadosUsuario(token.idUsuario, token.perfil)
      })
      .catch(erro=>{
        console.log(`Não foi possível buscar as informações do usuário`);
        console.log(`Erro: ${erro}`);
      })
  },[])

  useEffect(() => {
    if (idUsuario != "") {
        CarregarDadosUsuario(idUsuario, perfilUsuario)
    }
}, [idUsuario])

  const CarregarDadosUsuario = async (idUsuario, perfil) => {
    const idU = await api.get(`/Usuario/BuscarPorId/${idUsuario}`)
        .then(response => {
            setDadosUsuario(response.data)
            console.log(idU);
        }).catch(erro => {
            console.log(erro);
            // alert(erro)
        })
}
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
          <Input 
          placeholder="NOME"
          value={dadosUsuario.nome}
          editable={false}
          />
        </ViewInput>
        <ViewInput>
          <Input 
          // keyboardType="numeric" 
          placeholder="EMAIL"
          value={dadosUsuario.email}
          editable={false}
          />
        </ViewInput>
        <ViewInput>
          <Input placeholder="3A" />
        </ViewInput>

        <ButtonLight onPress={() => setShowLogout(true)}>
          <ButtonText>SAIR</ButtonText>
        </ButtonLight>
      </ContainerProfile>

      <CameraModal
        visible={showCamera}
        setShowModalCamera={setShowModalCamera}
      />
      {/* <ModalLogout
        navigation={navigation}
        setShowLogout={setShowLogout}
        visible={showLogout}
      /> */}
    </ScrollView>
  );
};
