import {
  Container,
  ContainerInput,
  ContainerGradient,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Input";
import { ButtonDark, ButtonText } from "../../components/Button/Style";
import { LinkButton, LinkButtonLogin, LinkText } from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/service";
import { userDecodeToken } from "../../utils/Auth";

import * as Notifications from "expo-notifications"

Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
    handleNotification: async()=>({
      shouldShowAlert: true,

      shouldPlaySound:false,

      shouldSetBadge:true,
    })
})
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();



  const handleCallNotifications = async()=>{
    const {status} = await Notifications.getPermissionsAsync();

    if(status !== "granted"){
      alert("Notificações não ativadas!!!")
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content:{
        title:"Bem vindo ao Bibliotech!",
        body:"Notificação recebida"
      },
      trigger: null
    })
  }
  async function HandleLogin() {
    await api
      .post("/Login", {
        email: email,
        senha: senha,
      })
      .then(async (response) => {
        await AsyncStorage.setItem("token", JSON.stringify(response.data));
        console.log(response);
        const teste = await userDecodeToken()
        console.log(teste);
        navigation.replace("Main");
      })
      .catch((error) => {
        console.log(error);
        console.log("a");
      });
  }

  async function LoadProfile() {
    if (email !== null) {
      HandleLogin();
      handleCallNotifications();
    }
  }

  useEffect(() => {
    LoadProfile();
  }, []);

  async function HandleForgotPassword() {
    navigation.replace("ForgotPassword");
  }

  return (
    <Container>
      <ContainerGradient>
        <LogoLogin source={require("../../assets/LOGO.png")} />
        <LogoLogin source={require("../../assets/LOGO.png")} />
        <ContainerInput>
          <Input placeholder={"EMAIL"} onChange={(e) => setEmail(e)} />
          <Input placeholder={"SENHA"} onChange={(e) => setSenha(e)} />
        </ContainerInput>

        <ButtonDark onPress={() => HandleLogin()}>
          <ButtonText>LOGIN</ButtonText>
        </ButtonDark>

        <LinkButton onPress={() => HandleForgotPassword()}>
          <LinkText>Esqueceu sua senha?</LinkText>
        </LinkButton>
      </ContainerGradient>
    </Container>
  );
};
