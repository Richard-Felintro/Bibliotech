import {
  BookImage,
  BookInfos,
  BookInfosTitle,
  BookInfosView,
  BookReturnDate,
  BookReturnDateView,
  Devolution,
  Devolution2,
  Line,
  ListBookCard,
  ListBookView,
} from "./Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CardList = ({
  source,
  bookName,
  bookAuthor,
  returnDate,
  onPress,
  status = "lendo",
}) => {
  return (
    <ListBookView>
      <ListBookCard onPress={onPress}>
        <BookImage source={source} />
        <BookInfosView>
          <BookInfosTitle>
            Título: <BookInfos>{bookName}</BookInfos>
          </BookInfosTitle>
          <BookInfosTitle>
            Autor: <BookInfos>{bookAuthor}</BookInfos>
          </BookInfosTitle>

          {status == "lendo" ? (
            <>
              <Devolution>Devolução: </Devolution>
              <BookReturnDateView>
                <MaterialCommunityIcons
                  name="calendar-text"
                  size={28}
                  color="#61A5C2"
                />

                <BookReturnDate>{ returnDate  }</BookReturnDate>
              </BookReturnDateView>
            </>
          ) : status == "lido" ? (
            <>
              <Devolution2>Lido em: {returnDate}</Devolution2>
            </>
          ) : (
            <></>
          )}
        </BookInfosView>
      </ListBookCard>
      <Line />
    </ListBookView>
  );
};
