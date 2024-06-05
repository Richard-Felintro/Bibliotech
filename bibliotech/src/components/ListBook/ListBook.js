import { FlatListBook } from "./Style";

export const ListBook = ({
  data,
  keyExtractor,
  renderItem,
  showsVerticalScrollIndicator,
}) => {
  return (
    <FlatListBook
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    />
  );
};
