import { ButtonDark, ButtonText } from "../../components/Button/Style";
import {
  Container,
  ContainerGradient,
  ContainerInput,
  ContainerText,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Input";
import { LinkButton, LinkText } from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";
import { TextContent } from "../../components/Text/Style";
import { Title } from "../../components/Title/Style";

export const FirstAccess = ({ navigation }) => {
  return (
    <Container>
      <ContainerGradient>
        <LogoLogin source={require("../../assets/LOGO.png")} />

        <ContainerText>
          <Title>Definição de Senha</Title>
          <TextContent>
            Digite o endereço de email para definir sua senha
          </TextContent>
        </ContainerText>

        <ContainerInput>
          <Input placeholder={"EMAIL"} />
        </ContainerInput>

        <ButtonDark onPress={() => navigation.navigate("FirstPassword")}>
          <ButtonText>ENVIAR</ButtonText>
        </ButtonDark>

        <LinkButton onPress={() => navigation.navigate("Login")}>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </ContainerGradient>
    </Container>
  );
};
