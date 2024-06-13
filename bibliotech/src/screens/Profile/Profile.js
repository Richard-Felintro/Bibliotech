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
import React, { useEffect, useState } from "react";
import { CameraModal } from "../../components/CameraModal/CameraModal";
import { ModalLogout } from "../../components/Modal/Index";
import { ProfileInfo, userDecodeToken } from "../../utils/Auth";
import api from "../../services/service";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "@react-navigation/native";

export const Profile = ({ PadContainer = 10, navigation, route }) => {
  const [showLogout, setShowLogout] = useState(false);
  const [showCamera, setShowModalCamera] = useState(false);
  const [perfilUsuario, setPerfilUsuario] = useState("");
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [idUsuario, setIdUsuario] = useState("");

  async function Logout(navigation) {
    try {
      await AsyncStorage.removeItem("token");

      //verifica se o token foi apagado com sucesso
      const tokenAfterLogout = await AsyncStorage.getItem("token");
      if (tokenAfterLogout === null) {
        console.log("Token apagado 😶‍🌫️");
      } else {
        console.log("Falha ao apagar o token 🤕");
      }

      //Ir para tela de login
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.error("Erro ao limpar token", error);
    }
  }

  useEffect(() => {
    ProfileInfo()
      .then((token) => {
        setPerfilUsuario(token.perfil);
        setIdUsuario(token.id);
        CarregarDadosUsuario(token.idUsuario, token.perfil);
      })
      .catch((erro) => {
        console.log(`Não foi possível buscar as informações do usuário`);
        console.log(`Erro: ${erro}`);
      });
  }, []);

  useEffect(() => {
    if (idUsuario != "") {
      CarregarDadosUsuario(idUsuario, perfilUsuario);
    }
  }, [idUsuario]);

  const CarregarDadosUsuario = async (idUsuario, perfil) => {
    const idU = await api
      .get(`/Usuario/BuscarPorId/${idUsuario}`)
      .then((response) => {
        setDadosUsuario(response.data);
        console.log(idU);
      })
      .catch((erro) => {
        console.log(erro);
        // alert(erro)
      });
  };

  async function requestGaleria() {
    await MediaLibrary.requestPermissionsAsync();

    await ImagePicker.requestMediaLibraryPermissionsAsync();
  }

  useEffect(() => {
    requestGaleria();
  }, []);

  async function AlterarFotoPerfil() {
    const token = await userDecodeToken();
    const formData = new FormData();
    formData.append("Arquivo", {
      uri: route.params.uriPhoto,
      name: `image.${route.params.uriPhoto.split(".").pop()}`,
      type: `image/${route.params.uriPhoto.split(".").pop()}`,
    });

    await api
      .put(`/Usuario/AlterarFotoPerfil?id=${token.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async () => {
        await setPerfilUsuario({
          ...perfilUsuario,
          idNavigation: {
            ...perfilUsuario.idNavigation,
            foto: route.params.uriPhoto,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (route.params != null && idUsuario != "") {
      AlterarFotoPerfil();
    }
  }, [idUsuario]);

  useFocusEffect(
    React.useCallback(() => {
      CarregarDadosUsuario();
    }, [])
  );
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
            <ImageComponent source={{ uri: dadosUsuario.foto }} />
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
      <ModalLogout
        navigation={navigation}
        setShowLogout={setShowLogout}
        visible={showLogout}
        onPressConfirm={() => Logout(navigation)}
        onPressCancel={() => setShowLogout(false)}
      />
    </ScrollView>
  );
};
