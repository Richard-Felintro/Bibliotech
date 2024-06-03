import { Image } from "react-native";
import {
  Container,
  ContainerInput,
  GradientContainer,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Input";
import { ButtonDark, ButtonText } from "../../components/Button/Style";
import { LinkButton, LinkText } from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { TextContent } from "../../components/Text/Style";

export const ChangePasswordScreen = () => {
  return (
    <Container>
      <GradientContainer>
        <LogoLogin
          width={200}
          height={160}
          source={require("../../assets/LOGO.png")}
        />
        <Title>Redifinição de Senha</Title>
        <TextContent>Defina uma nova senha.</TextContent>

        <ContainerInput>
          <Input placeholder={"SENHA"} />
          <Input placeholder={"CONFIRMAR SENHA"} />
        </ContainerInput>

        <ButtonDark>
          <ButtonText>LOGIN</ButtonText>
        </ButtonDark>

        <LinkButton>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </GradientContainer>
    </Container>
  );
};
