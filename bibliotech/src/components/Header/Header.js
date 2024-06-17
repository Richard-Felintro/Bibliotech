import {
  BtnExit,
  GradientHeader,
  HeaderProfileId,
  HeaderProfileImg,
  HeaderProfileName,
  HeaderProfileNameIdView,
  HeaderProfileView,
} from "./Style";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Header = ({ source, headerName, headerID, onPress1, onPress2 }) => {
  return (
    <GradientHeader>
      <HeaderProfileView onPress={onPress1}>
        <HeaderProfileImg source={source} />

        <HeaderProfileNameIdView>
          <HeaderProfileName>{headerName}</HeaderProfileName>
          <HeaderProfileId>{headerID}</HeaderProfileId>
        </HeaderProfileNameIdView>
      </HeaderProfileView>

      <BtnExit onPress={onPress2}>
        <Ionicons name="exit-outline" size={30} color="white" />
      </BtnExit>
    </GradientHeader>
  );
};
