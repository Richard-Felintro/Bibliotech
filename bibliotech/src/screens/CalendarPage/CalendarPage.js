import { Button, ScrollView } from "react-native";
// import { CalendarioCompleto } from "../../components/Callendar/Index";
import {CalendarioCompleto} from "../../components/Callendar/Index"
import { Subtitle, TitleSelecao } from "../../components/Callendar/Style";
import {
  ButtonLight,
  ButtonText,
  Cancelation,
} from "../../components/Button/Style";
import { useState } from "react";

import { ContainerProfile } from "../../components/Container/Style";
import { LinkButton, LinkText } from "../../components/Link/Style";
import { ModalConfirm } from "../../components/Modal/Index";

export const Calendar = ({
  navigation,
  Top = 40,
  PadContainer = 10,
  MarginTButtom = 64,
  BottomSubtitle = 10,
}) => {
  const [selecionarData, setSelecionarData] = useState(null);
  const [showModalConfirm,setShowModalConfirm] = useState(false);
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
        <Subtitle
          BottomSubtitle={BottomSubtitle}
        >8 de Julho</Subtitle>

        <ButtonLight MarginTButtom={MarginTButtom}
          onPress={()=>setShowModalConfirm(true) }
        >
          <ButtonText>CONTINUAR</ButtonText>
        </ButtonLight>

        <LinkButton
          onPress={()=> navigation.replace("Main")}
        >
          <LinkText>Cancelar</LinkText>
        </LinkButton>

        <ModalConfirm
          setShowModalConfirm={setShowModalConfirm}
          visible={showModalConfirm}
        />
      </ContainerProfile>
    //  </ScrollView>
  );
};
