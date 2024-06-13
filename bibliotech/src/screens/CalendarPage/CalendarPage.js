import { Button, ScrollView } from "react-native";
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
import moment from "moment";

export const Calendar = ({ navigation, MarginTButtom = 64, route }) => {
  const { BookId } = route.params;
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [day, setDay] = useState("");

  useEffect(() => {
    if (selectedDate != null) {
      setDay(moment(selectedDate).add(7, "days"));
    }
    console.log(day);
    console.log(selectedDate);
  }, [selectedDate]);

  async function HandleContinue() {
    if (selectedDate != null) {
      setShowModalConfirm(true);
    } else {
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
        <Subtitle>{day ? moment(day).date() : null} de {moment(day, "MMMM", "pt")}</Subtitle>

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
        bookId={BookId}
        date={selectedDate}
      />
    </CalendarContainer>
  );
};
