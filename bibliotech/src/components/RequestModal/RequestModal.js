import { LogBox, Modal, StyleSheet } from "react-native";
import {
  BtnSelected,
  BtnSelectedTitle,
  ContainerInputNoMargin,
  LinkButtonNoMargin,
  ModalContent,
  RequestModalContainer,
} from "./Style";
import { ContainerInput } from "../Container/Style";
import { Input } from "../Input/Input";
import { Title } from "../Title/Style";
import { ButtonDark, ButtonText } from "../Button/Style";
import { LinkButton, LinkText } from "../Link/Style";
import RNPickerSelect from "react-native-picker-select";
import { useEffect, useState } from "react";
import api from "../../services/service";
import { Dropdown } from "../Select/Select";
import { InputBox } from "../Input/Style";

export const RequestModal = ({ visible, showModal }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({});

  useEffect(() => {
    loadGenres();
  }, []);

  async function loadGenres() {
    await api
      .get("/Genero/ListarGeneros")
      .then(async (response) => {
        setGenres(response.data);
        console.log(genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <RequestModalContainer>
        <ModalContent>
          <Title>SOLICITAR EMPRESTIMO</Title>

          <ContainerInputNoMargin>
            <InputBox>
              <RNPickerSelect
                style={dropdownStyles}
                items={genres}
                value={genres.tituloGenero}
                key={genres.idGenero}
                onValueChange={(value) => setSelectedGenre(value)}
                placeholder={{ label: "SELECIONE UM GÊNERO", value: null }}
              />
            </InputBox>
            <Input
              placeholder={"SELECIONAR LIVRO"}
              onChange={(e) => setSenha(e)}
            />
          </ContainerInputNoMargin>

          <ButtonDark onPress={() => HandleLogin()}>
            <ButtonText>LOGIN</ButtonText>
          </ButtonDark>

          <LinkButtonNoMargin onPress={() => showModal(false)}>
            <LinkText>Cancelar</LinkText>
          </LinkButtonNoMargin>
        </ModalContent>
      </RequestModalContainer>
    </Modal>
  );
};
const dropdownStyles = StyleSheet.create({
  inputAndroid: {
    placeholderTextColor: "#c8c8c8",
    padding: 10,
    fontFamily: "MontserratAlternates_500Medium",
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    backgroundColor: "transparent",
  },
});
