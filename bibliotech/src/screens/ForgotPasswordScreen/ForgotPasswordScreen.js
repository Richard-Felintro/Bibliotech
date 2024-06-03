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

export const ForgotPasswordScreen = () => {
  return (
    <Container>
      <GradientContainer>
        <LogoLogin
          width={200}
          height={160}
          source={require("../../assets/LOGO.png")}
        />
        <Title>Recuperação de Senha</Title>
        <TextContent>
          Digite o endereço de email para qual email enviaremos o link de
          recuperação de senha.
        </TextContent>

        <ContainerInput>
          <Input placeholder={"EMAIL"} />
        </ContainerInput>
        <ButtonDark>
          <ButtonText>ENVIAR</ButtonText>
        </ButtonDark>

        <LinkButton>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </GradientContainer>
    </Container>
  );
};
