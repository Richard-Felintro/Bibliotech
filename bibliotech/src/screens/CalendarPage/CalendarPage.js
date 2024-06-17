import { Alert, Button, ScrollView } from "react-native";
// import { CalendarioCompleto } from "../../components/Callendar/Index";
import { CalendarioCompleto } from "../../components/Callendar/Index";
import { Subtitle, TitleSelecao } from "../../components/Callendar/Style";
import {
  ButtonLight,
  ButtonText,
  Cancelation,
} from "../../components/Button/Style";
import { useState, useEffect } from "react";

import {
  Container,
  ContainerColumn,
  ContainerProfile,
  ContainerText,
} from "../../components/Container/Style";
import { LinkButton, LinkText } from "../../components/Link/Style";
import { ModalConfirm } from "../../components/Modal/Index";
import { Title } from "../../components/Title/Style";
import { TextContent } from "../../components/Text/Style";
import { CalendarContainer } from "./Style";
import moment from "moment/min/moment-with-locales";
import { userDecodeToken } from "../../utils/Auth";
import api from "../../services/service";

export const Calendar = ({ navigation, MarginTButtom = 64, route }) => {
  const { BookId } = route.params;
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookData, setBookData] = useState({});
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [day, setDay] = useState("");
  const [userId, setUserId] = useState();

  useEffect(() => {
    getUserId();
    GetBookInfo();
  }, []);

  useEffect(() => {
    console.log(BookId);
    if (selectedDate != null) {
      setDay(moment(selectedDate).add(7, "days"));
    }
    console.log(day);
    console.log(selectedDate);
  }, [selectedDate]);

  async function getUserId() {
    const userInfo = await userDecodeToken();
    setUserId(userInfo.id);
  }

  async function GetBookInfo() {
    console.log("livro");
    console.log(BookId);
    await api
      .get(`/Livro/BuscarPorId/${BookId}`)
      .then(async (response) => {
        console.log("livro");
        console.log(bookData);
        setBookData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function HandleContinue() {
    if (selectedDate != null) {
      setShowModalConfirm(true);
    } else {
      Alert("Uma data deve ser selecionada.");
    }
  }

  return (
    <CalendarContainer>
      <ContainerText>
        <Title>Data de retirada</Title>
        <TextContent>
          O emprestimo de ser concluído ou renovado em 1 semana.
        </TextContent>

        <CalendarioCompleto
          selecionarData={setSelectedDate}
          dataSelecionada={selectedDate}
        />
      </ContainerText>

      <ContainerText>
        <Title>Data de devolução</Title>
        <Subtitle>
          {day ? moment(day).date() : null}
          {day ? " de " : "Indeterminado"}
          {day ? moment(day).locale("pt-br").format("MMMM") : null}
        </Subtitle>

        <ButtonLight
          MarginTButtom={MarginTButtom}
          onPress={() => HandleContinue()}
        >
          <ButtonText>CONTINUAR</ButtonText>
        </ButtonLight>
        <LinkButton onPress={() => navigation.replace("Main")}>
          <LinkText>Cancelar</LinkText>
        </LinkButton>
      </ContainerText>

      <ModalConfirm
        setShowModalConfirm={setShowModalConfirm}
        visible={showModalConfirm}
        bookData={bookData}
        userId={userId}
        date={moment(day).format("YYYY-MM-DD")}
        navigation={navigation}
      />
    </CalendarContainer>
  );
};
