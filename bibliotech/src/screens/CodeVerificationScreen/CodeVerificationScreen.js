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
import { useEffect, useRef, useState } from "react";
import api from "../../services/service";

export const CodeVerificationScreen = ({ navigation, route }) => {
  const { email } = route.params;
  const [code, setCode] = useState("");
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [char1, setChar1] = useState();
  const [char2, setChar2] = useState();
  const [char3, setChar3] = useState();
  const [char4, setChar4] = useState();

  useEffect(() => {
    console.log(email);
  }, []);

  async function HandleContinue() {
    const code = char1 + char2 + char3 + char4
    console.log(code);
    await api
      .post(`/RecuperarSenha/PostValidacao?email=${email}&codigo=${code}`)
      .then(async (response) => {
        console.log(response);
        navigation.replace("ChangePassword", { email: email });
      })
      .catch((error) => {
        console.log(error);
        setAlert("Usuário não encontrado.");
      });
  }

  async function HandleResend() {
    await api
      .post(`/RecuperarSenha?email=${email}`)
      .then(async (response) => {
        console.log(response);
        navigation.replace("CodeVerification", { email: email });
      })
      .catch((error) => {
        console.log("Erro no reenvio de código");
        console.log(error);
      });
  }

  async function HandleCancel() {
    navigation.navigate("ForgotPassword");
  }

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
          <TextContent>Digite o código enviado para</TextContent>
          <TextHighlight>{email}</TextHighlight>
        </ContainerText>

        <ContainerInput>
          <ContainerRow>
            {[0, 1, 2, 3].map((index) => (
              <InputCodeBox key={index}>
                <InputCode
                  maxLength={1}
                  keyboardType="numeric"
                  ref={inputs[index]}
                  onChangeText={(txt) => {
                    switch (index) {
                      case 0:
                        setChar1(txt);
                        break;
                      case 1:
                        setChar2(txt);
                        break;
                      case 2:
                        setChar3(txt);
                        break;
                      case 3:
                        setChar4(txt);
                        break;
                      default:
                        console.log(rip);
                    }
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
          <ButtonDarkSmall onPress={() => HandleContinue()}>
            <ButtonText>ENVIAR</ButtonText>
          </ButtonDarkSmall>
          <ButtonLightSmall onPress={() => HandleResend()}>
            <ButtonText>REENVIAR</ButtonText>
          </ButtonLightSmall>
        </ContainerRow>

        <LinkButton onPress={() => HandleCancel()}>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </ContainerGradient>
    </Container>
  );
};
