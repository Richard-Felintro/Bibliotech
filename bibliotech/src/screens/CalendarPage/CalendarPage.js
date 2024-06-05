import { Button, ScrollView } from "react-native";
// import { CalendarioCompleto } from "../../components/Callendar/Index";
import {CalendarioCompleto} from "../../components/Callendar/Index"
import {
  Subtitle,
  TitleSelecao,
} from "../../components/Callendar/Style";
import { ContainerProfile } from "../../components/Container/Container";
import {
  ButtonLight,
  ButtonText,
  Cancelation,
} from "../../components/Button/Style";
import { useState } from "react";
import { LinkButton, LinkText } from "../../components/Link/Style";

export const Calendar = ({
  Top = 40,
  PadContainer = 10,
  MarginTButtom = 64,
  BottomSubtitle = 10,
}) => {
  const [selecionarData, setSelecionarData] = useState(null);
  return (
    // <ScrollView
    //   style={{
    //     width: "100%",
    //     flex: 1,
    //   }}
    // >
   
      <ContainerProfile
        PadContainer={PadContainer}
      >
        <TitleSelecao Top={Top}>Selecionar data de retirada</TitleSelecao>
        <Subtitle BottomSubtitle={BottomSubtitle}>
          O emprestimo deve ser concluído ou renovado em 1 semana
        </Subtitle>
        <CalendarioCompleto
          selecionarData={setSelecionarData}
          dataSelecionada={selecionarData}
        />
        

        <TitleSelecao Top={Top}>Data de devolução</TitleSelecao>
        <Subtitle>8 de Julho</Subtitle>

        <ButtonLight MarginTButtom={MarginTButtom}>
          <ButtonText>CONTINUAR</ButtonText>
        </ButtonLight>

        {/* <Cancelation>Cancelar</Cancelation> */}
        <LinkButton>
        <LinkText>Cancelar</LinkText>
        </LinkButton>
      </ContainerProfile>
    //  </ScrollView>
  );
};
