import styled from "styled-components";

export const ListBookView = styled.View`
  width: 90%;
  height: 167px;
  margin-top: 10px;
  margin-bottom: 60px;
`;

export const ListBookCard = styled.TouchableOpacity`
  width: 90%;
  height: 167px;
  align-items: center;
  justify-content: start;
  flex-direction: row;
`;

export const Line = styled.View`
  width: 90%;
  height: 1px;
  border: 1px solid #a1d9df;
  background-color: #a1d9df;
  align-self: center;
  margin-top: 27px;
  margin-bottom: 37px;
  margin-left: 30px;
`;

export const BookImage = styled.Image`
  width: 90px;
  height: 135px;
  border-radius: 8px;
  margin-left: 20px;
`;

export const BookImageModal = styled.Image`
  width:146px;
  height:252px;
  border-radius:8px;
  margin-bottom: ${props=> `${props.MbImage}px`}
`

export const BookInfosView = styled.View`
  margin-left: 15px;
`;

export const BookInfos = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_500Medium";
`;

export const BookInfosTitle = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_700Bold";
  color: white;
`;

export const BookReturnDateView = styled.View`
  flex-direction: row;
  gap: 15px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const BookReturnDate = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_500Medium";
  color: white;
`;

export const Devolution = styled.Text`
  font-size: 15px;
  font-family: "MontserratAlternates_500Medium";
  margin-top: 24px;
  color: white;
`;
