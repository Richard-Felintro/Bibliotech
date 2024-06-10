import { Image } from "react-native";
import {
  Container,
  ContainerInput,
  ContainerRow,
  ContainerText,
  ContainerGradient,
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
import { useRef, useState } from "react";

export const CodeVerificationScreen = ({navigation}) => {
  const [code, setCode] = useState(false);
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  async function focusNextInput(index) {
    if (index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  }

  async function focusPrevInput(index) {
    if (index > 0) {
      inputs[index - 1].current.focus();
    }
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
          <Title>Validação do código</Title>
          <TextContent>Digite o código enviado para:</TextContent>
          <TextHighlight>endereco@email.com</TextHighlight>
        </ContainerText>

        <ContainerInput>
          <ContainerRow>
            {[0, 1, 2, 3].map((index) => (
              <InputCodeBox key={index}>
                <InputCode
                  keyboardType="numeric"
                  ref={inputs[index]}
                  onChangeText={(txt) => {
                    if (txt == "") {
                      focusPrevInput(index);
                    } else {
                      focusNextInput(index);
                    }
                  }}
                  placeholder="0"
                />
              </InputCodeBox>
            ))}
          </ContainerRow>
        </ContainerInput>

        <ContainerRow>
          <ButtonDarkSmall onPress={() => navigation.navigate("ChangePassword")}>
            <ButtonText>ENVIAR</ButtonText>
          </ButtonDarkSmall>
          <ButtonLightSmall>
            <ButtonText>REENVIAR</ButtonText>
          </ButtonLightSmall>
        </ContainerRow>

        <LinkButton onPress={() => navigation.navigate("Login")}>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </ContainerGradient>
    </Container>
  );
};
