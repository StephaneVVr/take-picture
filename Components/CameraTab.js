import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Camera } from "expo-camera";

import AppContainer from "./AppContainer";

const CameraTabComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    console.log("test");
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (this.camera) {
      try {
        let photo = await this.camera.takePictureAsync();
        console.log(photo);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <AppContainer>
      <Camera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={{ flex: 1 }}
      ></Camera>
      <Button title="Take new photo" onPress={snap} />
    </AppContainer>
  );
};

export default CameraTabComponent;
