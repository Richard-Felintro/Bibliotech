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
import { TextContent } from "../../components/Text/Style";

export const ForgotPasswordScreen = ({navigation}) => {
  async function HandleCancel() { 
    navigation.navigate("Login");
  }
  return (
    <Container>
      <ContainerGradient>
        <LogoLogin source={require("../../assets/LOGO.png")} />

        <ContainerText>
          <Title>Recuperação de Senha</Title>
          <TextContent>
            Digite o endereço de email para qual email enviaremos o link de
            recuperação de senha.
          </TextContent>
        </ContainerText>

        <ContainerInput>
          <Input placeholder={"EMAIL"} />
        </ContainerInput>
        <ButtonDark>
          <ButtonText>ENVIAR</ButtonText>
        </ButtonDark>

        <LinkButton onPress={() => HandleCancel()}>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </ContainerGradient>
    </Container>
  );
};
