import {
  Container,
  ContainerInput,
  ContainerGradient,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Input";
import { ButtonDark, ButtonText } from "../../components/Button/Style";
import { LinkButton, LinkText } from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";

export const LoginScreen = () => {
  return (
    <Container>
      <ContainerGradient>
        <LogoLogin
          source={require("../../assets/LOGO.png")}
        />
        <ContainerInput>
          <Input placeholder={"EMAIL"} />
          <Input placeholder={"SENHA"} />
        </ContainerInput>

        <ButtonDark>
          <ButtonText>LOGIN</ButtonText>
        </ButtonDark>

        <LinkButton>
          <LinkText>Esqueceu sua senha?</LinkText>
        </LinkButton>
      </ContainerGradient>
    </Container>
  );
};
