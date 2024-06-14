import {
  CameraModalBtn,
  CameraModalBtnView,
  LastPicture,
  LinkButtomCamera,
  Seila,
  ViewButtons,
} from "./Style";
import { LinkText } from "../../Link/Style";
import { TouchableOpacity } from "react-native";
import { FontAwesome6, Entypo } from "@expo/vector-icons";

export const CameraButton = ({
  onPress1,
  onPress2,
  onPress3,
  onPress4,
  source,
  lastPicture,
}) => {
  return (
    <CameraModalBtnView>
      <TouchableOpacity onPress={onPress2}>
        <Entypo name="cross" size={45} color="#a9afb8" />
      </TouchableOpacity>
      <CameraModalBtn onPress={onPress1}>
        <Seila />
      </CameraModalBtn>
      <TouchableOpacity onPress={onPress3}>
        <FontAwesome6 name="camera-rotate" size={30} color="#a9afb8" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress4}>
        {lastPicture != null ? (
          <LastPicture source={source}></LastPicture>
        ) : null}
      </TouchableOpacity>
    </CameraModalBtnView>
  );
};
