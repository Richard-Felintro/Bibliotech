import {
  Container,
  ContainerInput,
  ContainerGradient,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Input";
import { ButtonDark, ButtonText } from "../../components/Button/Style";
import { LinkButton, LinkButtonLogin, LinkText } from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";
import { LinkButtonView, OU } from "./Style";

export const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <ContainerGradient>
        <LogoLogin source={require("../../assets/LOGO.png")} />
        <ContainerInput>
          <Input placeholder={"EMAIL"} />
          <Input placeholder={"SENHA"} />
        </ContainerInput>

        <ButtonDark onPress={() => navigation.navigate("BottonTab")}>
          <ButtonText>LOGIN</ButtonText>
        </ButtonDark>

        <LinkButtonView>
          <LinkButtonLogin onPress={() => navigation.navigate("ForgotPassword")}>
            <LinkText>Esqueceu sua senha?</LinkText>
          </LinkButtonLogin>
          {/* <OU>ou</OU> */}
          {/* <LinkButtonLogin onPress={() => navigation.navigate("FirstAccess")}>
            <LinkText>Primeiro acesso?</LinkText>
          </LinkButtonLogin> */}
        </LinkButtonView>
      </ContainerGradient>
    </Container>
  );
};
