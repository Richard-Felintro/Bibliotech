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

export const Header = ({ source, headerName, headerID }) => {
  return (
    <GradientHeader>
      <HeaderProfileView>
        <HeaderProfileImg source={source} />

        <HeaderProfileNameIdView>
          <HeaderProfileName>{headerName}</HeaderProfileName>
          <HeaderProfileId>{headerID}</HeaderProfileId>
        </HeaderProfileNameIdView>
      </HeaderProfileView>

      <BtnExit>
        <Ionicons name="exit-outline" size={30} color="white" />
      </BtnExit>
    </GradientHeader>
  );
};
