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

export const RequestModal = ({ visible, showModal, navigation }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    LoadGenres();
  }, []);

  
  useEffect(() => {
    LoadBooks();
  }, [selectedGenre]);

  async function LoadBooks() {
    await api
      .get(`/Livro/ListarLivrosPorGenero?idGenero=${selectedGenre}`)
      .then(async (response) => {
        setBooks(
          response.data
          .filter(x => x.situacaoLivro === "disponível")
          .map((x) => ({
            label: x.titulo,
            value: x.idLivro,
          }))
        );
        console.log("hmmm");
        console.log(response.data);
        console.log(books);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function UpdateBooks(){
   
  }

  async function LoadGenres() {
    await api
      .get("/Genero/ListarGeneros")
      .then(async (response) => {
        setGenres(
          response.data.map((x) => ({
            label: x.tituloGenero.toUpperCase(),
            value: x.idGenero,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function HandleContinue(){
    console.log("id");
    console.log(selectedBook);
    navigation.replace('Calendar', {
      BookId: selectedBook,
    });

   
  }

  async function ChooseGenre(value){
    setSelectedGenre(value)
    setDisabled(false)
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
                onValueChange={(value) => ChooseGenre(value)}
                placeholder={{ label: "SELECIONE UM GÊNERO", value: null }}
              />
            </InputBox>
            <InputBox>
              <RNPickerSelect
                style={dropdownStyles}
                items={books}
                onValueChange={(value) => setSelectedBook(value)}
                placeholder={disabled ? { label: "", value: null } : { label: "SELECIONE UM LIVRO", value: null }}
                disabled={disabled}
              />
            </InputBox>
          </ContainerInputNoMargin>

          <ButtonDark onPress={() => HandleContinue()}>
            <ButtonText>CONFIRMAR</ButtonText>
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
    placeholder:{
      color: "#C8C8C8"
    },
    color: "white",
    padding: 10,
    fontFamily: "MontserratAlternates_500Medium",
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "transparent",
  },
});
