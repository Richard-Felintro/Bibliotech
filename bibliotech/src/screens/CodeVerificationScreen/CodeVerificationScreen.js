import { Image } from "react-native";
import {
  Container,
  ContainerInput,
  ContainerRow,
  GradientContainer,
} from "../../components/Container/Style";
import { Input } from "../../components/Input/Input";
import {
  ButtonDark,
  ButtonDarkSmall,
  ButtonLightSmall,
  ButtonText,
} from "../../components/Button/Style";
import { LinkButton, LinkText } from "../../components/Link/Style";
import { LogoLogin } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { TextContent, TextHighlight } from "../../components/Text/Style";
import { InputCode, InputCodeBox } from "../../components/Input/Style";

export const CodeVerificationScreen = () => {
  return (
    <Container>
      <GradientContainer>
        <LogoLogin
          width={200}
          height={160}
          source={require("../../assets/LOGO.png")}
        />
        <Title>Validação do código</Title>
        <TextContent>Digite o código enviado para:</TextContent>
        <TextHighlight>endereco@email.com</TextHighlight>

        <ContainerRow>
          <InputCodeBox>
            <InputCode placeholder={"0"} />
          </InputCodeBox>
          <InputCodeBox>
            <InputCode placeholder={"0"} />
          </InputCodeBox>
          <InputCodeBox>
            <InputCode placeholder={"0"} />
          </InputCodeBox>
          <InputCodeBox>
            <InputCode placeholder={"0"} />
          </InputCodeBox>
        </ContainerRow>

        <ContainerRow>
          <ButtonDarkSmall>
            <ButtonText>ENVIAR</ButtonText>
          </ButtonDarkSmall>
          <ButtonLightSmall>
            <ButtonText>REENVIAR</ButtonText>
          </ButtonLightSmall>
        </ContainerRow>

        <LinkButton>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </GradientContainer>
    </Container>
  );
};
