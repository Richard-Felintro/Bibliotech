import { Image } from "react-native";
import {
  Container,
  ContainerGradient,
  ContainerInput,
  ContainerText,
  GradientContainer,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Input";
import { ButtonDark, ButtonText } from "../../components/Button/Style";
import { LinkButton, LinkText } from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { TextAlert, TextContent } from "../../components/Text/Style";
import { useState } from "react";
import api from "../../services/service";

export const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [alert, setAlert] = useState("");

  async function HandleContinue() {
    console.log(email);
    await api
      .post(`/RecuperarSenha?email=${email}`)
      .then(async (response) => {
        console.log(response);
        navigation.replace("CodeVerification", { email: email });
      })
      .catch((error) => {
        console.log(error);
        setAlert("Usuário não encontrado.");
      });
  }

  async function HandleCancel() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <ContainerGradient>
        <LogoLogin source={require("../../assets/LOGO.png")} />

        <ContainerText>
          <Title>Recuperação de Senha</Title>
          <TextAlert>{alert}</TextAlert>
          <TextContent>
            Digite o endereço de email para qual email enviaremos o link de
            recuperação de senha.
          </TextContent>
        </ContainerText>

        <ContainerInput>
          <Input placeholder={"EMAIL"} onChange={(e) => setEmail(e)} />
        </ContainerInput>
        <ButtonDark onPress={() => HandleContinue()}>
          <ButtonText>ENVIAR</ButtonText>
        </ButtonDark>

        <LinkButton onPress={() => HandleCancel()}>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </ContainerGradient>
    </Container>
  );
};
