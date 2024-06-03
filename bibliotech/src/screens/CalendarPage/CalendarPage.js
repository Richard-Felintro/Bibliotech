import { Button } from "react-native"
import { CalendarioCompleto } from "../../components/Callendar/Index"
import { ContainerSelectPage, Subtitle, TitleSelecao } from "../../components/Callendar/Style"
import { ContainerProfile } from "../../components/Container/Container"
import { ButtonLight, ButtonText, Cancelation } from "../../components/Button/Style"

export const Calendar = ({Top = 40, PadContainer=10, MarginTButtom= 20})=>{
    return(
        <ContainerProfile
            PadContainer={PadContainer}
        >
            <TitleSelecao
            Top={Top}
            >Selecionar data de retirada</TitleSelecao>
            <Subtitle>O emprestimo deve ser concluído ou renovado em 1 semana</Subtitle>
        <CalendarioCompleto/>

        <TitleSelecao
            Top={Top}
            >Data de devolução</TitleSelecao>
            <Subtitle>8 de Julho</Subtitle>

            <ButtonLight
                MarginTButtom={MarginTButtom}
            >
                <ButtonText>CONTINUAR</ButtonText>
            </ButtonLight>

            <Cancelation>Cancelar</Cancelation>
        </ContainerProfile>
    )
}