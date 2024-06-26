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

export const FirstPassword = ({navigation}) => {
  <Container>
    <ContainerGradient>
      <LogoLogin
        width={200}
        height={160}
        source={require("../../assets/LOGO.png")}
      />

      <ContainerText>
        <Title>Definição de Senha</Title>
        <TextContent>Defina sua senha</TextContent>
      </ContainerText>

      <ContainerInput>
        <Input placeholder={"SENHA"} />
        <Input placeholder={"CONFIRMAR SENHA"} />
      </ContainerInput>

      <ButtonDark onPress={() => navigation.navigate("Login")}>
        <ButtonText>CONFIRMAR</ButtonText>
      </ButtonDark>

      <LinkButton onPress={() => navigation.navigate("Login")}>
        <LinkText>Cancelar</LinkText>
      </LinkButton>
    </ContainerGradient>
  </Container>
};
