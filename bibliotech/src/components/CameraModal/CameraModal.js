import { CameraView } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { CameraButton } from "./CameraButton/CameraButton";
import { CameraType } from "expo-camera/build/legacy/Camera.types";

export const CameraModal = ({
  visible,
  onPress,
  setShowModalCamera,
  ...rest
}) => {
  const cameraRef = useRef(null);

  const [openModal, setOpenModal] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);

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
    setShowModalCamera(false);
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
        zoom={0.9}

      >
        <CameraButton onPress={() => CapturePhoto()} />
      </CameraView>
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
