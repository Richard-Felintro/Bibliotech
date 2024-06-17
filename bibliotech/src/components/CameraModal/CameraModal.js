import { CameraView } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { CameraButton } from "./CameraButton/CameraButton";
import { CameraType } from "expo-camera/build/legacy/Camera.types";
import { FontAwesome } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";

export const CameraModal = ({
  visible,
  onPress,
  setShowModalCamera,
  getMediaLibrary = true,
  setUriCameraCapture,
  ...rest
}) => {
  const cameraRef = useRef(null);

  const [openModal, setOpenModal] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [cameraType, setCameraType] = useState("front");
  const [lastPicture, setLastPicture] = useState();
  const [capturePicture, setCapturePicture] = useState();

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();

      setPhoto(photo.uri);
      console.log(photo.uri);
      setOpenModal(true);
      console.log(photo);
    }
  }

  function ClearPhoto() {
    setPhoto(null);
    DeletePicture();
    setOpenModal(false);
  }

  function handleClose() {
    setShowModalCamera(false);
    setOpenModal(false);
  }

  async function SendPhoto() {
    await setUriCameraCapture(photo);
    MediaLibrary.saveToLibraryAsync(photo);
    console.log("pic");
    console.log(photo.uri);
    setUriCameraCapture(photo.uri);
    setOpenModal(false);
    setShowModalCamera(false);
  }

  function ChangeCameraType() {
    setCameraType(cameraType == "front" ? "back" : "front");
    console.log(cameraType);
  }

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  async function GetLatestPicture() {
    const { assets } = await MediaLibrary.getAssetsAsync({
      sortBy: [[MediaLibrary.SortBy.creationTime, false]],
      first: 1,
    });
    if (assets.length > 0) {
      console.log(":3");
      setLastPicture(assets[0].uri);
    }
    console.log(assets);
  }

  useEffect(() => {
    setPhoto(null);
    console.log("3:");
    if (getMediaLibrary) {
      GetLatestPicture();
      console.log(lastPicture);
    }
  }, [visible]);

  async function SelectImageGallery() {
    console.log(":D");
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);

      setOpenModal(true);
    }
  }

  async function DeletePicture() {
    await setUriCameraCapture(null);
  }

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
        facing={cameraType}
        zoom={0.9}
      >
        <CameraButton
          onPress1={() => CapturePhoto()}
          onPress2={setShowModalCamera}
          onPress3={() => ChangeCameraType()}
          onPress4={() => SelectImageGallery()}
          source={{ uri: lastPicture }}
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
              width: "90%",
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
                justifyContent: "center"
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

        <StatusBar style="auto" />
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
