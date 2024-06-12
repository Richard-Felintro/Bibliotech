import { CameraView } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { CameraButton } from "./CameraButton/CameraButton";
import { CameraType } from "expo-camera/build/legacy/Camera.types";
import { FontAwesome } from "@expo/vector-icons";

export const CameraModal = ({
  visible,
  onPress,
  setShowModalCamera,
  ...rest
}) => {
  const cameraRef = useRef(null);

  const [openModal, setOpenModal] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.front);

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();

      setPhoto(photo.uri);
      setOpenModal(true);
      console.log(photo);
    }
  }

  function ClearPhoto() {
    setPhoto(null);
    setOpenModal(false);
  }

  function SendPhoto() {
    setPhoto(null);
    setOpenModal(false);
    setShowModalCamera({ setShowModalCamera });
  }

  function ChangeCameraType() {
    setCameraType(
      cameraType == CameraType.front ? CameraType.back : CameraType.front
    );
    console.log(cameraType);
  }

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
    })();
  }, []);

  return (
    <Modal
      setShowModalCamera={setShowModalCamera}
      visible={visible}
      transparent={false}
      animationType="slide"
      {...rest}
    >
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        ratio="16:9"
        type={cameraType}
        // zoom={0.05}
      >
        <CameraButton
          onPress1={() => CapturePhoto()}
          onPress2={setShowModalCamera}
          onPress3={() => ChangeCameraType()}
        />
      </CameraView>

      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
            backgroundColor: "#01497c",
            borderRadius: 20,
          }}
        >
          <Image
            style={{
              margin: 10,
              height: 500,
              borderRadius: 15,
            }}
            source={{ uri: photo }}
          />

          <View style={{ margin: 15, flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                padding: 20,
                borderRadius: 15,
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => SendPhoto()}
            >
              <FontAwesome name="save" size={35} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 20,
                borderRadius: 15,
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => ClearPhoto()}
            >
              <FontAwesome name="trash" size={35} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    height: "80%",
    width: "100%",
  },
});
