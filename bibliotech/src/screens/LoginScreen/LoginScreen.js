import {
  Container,
  ContainerInput,
  ContainerGradient,
} from "../../components/Container/Style";
import { Input, PasswordInput } from "../../components/Input/Input";
import { ButtonDark, ButtonText } from "../../components/Button/Style";
import {
  LinkButton,
  LinkButtonLogin,
  LinkText,
} from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/service";
import { userDecodeToken } from "../../utils/Auth";

import * as Notifications from "expo-notifications";
import { Image } from "react-native";

Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,

    shouldPlaySound: false,

    shouldSetBadge: true,
  }),
});
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("richard@");
  const [senha, setSenha] = useState("richard");

  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      alert("Notificações não ativadas!!!");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao Bibliotech!",
        body: "Notificação recebida",
      },
      trigger: null,
    });
  };

  async function HandleLogin() {
    await api
      .post("/Login", {
        email: email,
        senha: senha,
      })
      .then(async (response) => {
        console.log(response);
        // navigation.replace("BottonTab");
        await AsyncStorage.setItem("token", JSON.stringify(response.data));
        if ((await userDecodeToken()) != null) {
          navigation.replace("BottonTab");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("a");
      });
  }

  async function LoadProfile() {
    if (email !== null) {
      HandleLogin();
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
        <Image
          style={[{ height: 200 }, { width: 160 }, { marginBottom: 64 }]}
          source={require("../../assets/LOGO.png")}
        />
        <ContainerInput>
          <Input placeholder={"EMAIL"} onChange={(e) => setEmail(e)} />
          <PasswordInput
            placeholder={"SENHA"}
            onChange={(e) => setSenha(e)}
            value={senha}
          />
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
