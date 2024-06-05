import { BtnReserveView } from "./Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const BtnReserve = ({ onPress }) => {
  return (
    <BtnReserveView onPress={onPress}>
      <MaterialCommunityIcons
        name="book-plus-outline"
        size={29}
        color="#012A4A"
      />
    </BtnReserveView>
  );
};
