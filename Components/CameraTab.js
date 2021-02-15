import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
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
  return (
    <AppContainer>
      <Camera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={{ flex: 1 }}
      ></Camera>
    </AppContainer>
  );
};

export default CameraTabComponent;
