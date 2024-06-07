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

export const ChangePasswordScreen = () => {
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  const [alert, setAlert] = useState("");

  async function HandleContinue() {
    if (senha1 === senha2 && senha1 != null) {
      navigation.navigate("Main");
    }
    setAlert("Ambas as senhas devem ser idênticas");
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
