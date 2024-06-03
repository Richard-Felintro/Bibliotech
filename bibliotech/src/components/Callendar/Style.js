import styled from "styled-components";
    
import CalendarStrip from "react-native-calendar-strip"

import { ContainerProfile } from "../Container/Container";

export const StyledCalendarStrip = styled(CalendarStrip)`
    height: 100px;
    width: 100%;
    margin: 20px 0 35px;
`

export const TitleSelecao = styled.Text`
    font-family:'MontserratAlternates_700Bold';
    font-size: 25px;
    /* margin-bottom: 35px; */
    margin-top:${props=> `${props.Top}px`};
    color:#ffff;
`

export const ContainerSelectPage = styled(ContainerProfile)`
    /* padding: 60px 5% 30px;
    margin: 0 auto; */
`

export const Subtitle = styled.Text`
    text-align:center;
    /* margin-top:20px; */
    color:#ffff;
    font-size:16px;
    font-family:'MontserratAlternates_500Medium';
`