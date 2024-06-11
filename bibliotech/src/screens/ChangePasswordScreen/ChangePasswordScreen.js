import { Alert, Image } from "react-native";
import {
  Container,
  ContainerGradient,
  ContainerInput,
  ContainerText,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Input";
import { ButtonDark, ButtonText } from "../../components/Button/Style";
import { LinkButton, LinkText } from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { TextAlert, TextContent } from "../../components/Text/Style";
import { useState } from "react";

import * as Notifications from "expo-notifications";
import api from "../../services/service";

// Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});
export const ChangePasswordScreen = ({ navigation, route }) => {
  const { email } = route.params;
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  const [alert, setAlert] = useState("");

  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Senha Alterada com sucesso!!!",
        body: "Notificação recebida",
      },
      trigger: null,
    });
  };

  async function HandleContinue() {
    if (senha1 === senha2 && senha1 != null) {
      setAlert("");
      await api
        .post(`/Usuario/AlterarSenha?email=${email}`, {
          senhaNova: {senha1}
        })
        .then(async (response) => {
          console.log(response);
          navigation.replace("Login");
        })
        .catch((error) => {
          console.log(error);
          setAlert("Algo deu errado, tente novamente mais tarde.");
        });

      handleCallNotifications();
    }
    setAlert("Ambas as senhas devem ser idênticas.  ");
  }

  async function HandleCancel() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <ContainerGradient>
        <LogoLogin
          width={200}
          height={160}
          source={require("../../assets/LOGO.png")}
        />

        <ContainerText>
          <TextAlert>{alert}</TextAlert>
          <Title>Redifinição de Senha</Title>
          <TextContent>Defina uma nova senha.</TextContent>
        </ContainerText>

        <ContainerInput>
          <Input placeholder={"SENHA"} onChange={(e) => setSenha1(e)} />
          <Input
            placeholder={"CONFIRMAR SENHA"}
            onChange={(e) => setSenha2(e)}
          />
        </ContainerInput>

        <ButtonDark onPress={() => HandleContinue()}>
          <ButtonText>CONFIRMAR</ButtonText>
        </ButtonDark>

        <LinkButton onPress={() => HandleCancel()}>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </ContainerGradient>
    </Container>
  );
};
