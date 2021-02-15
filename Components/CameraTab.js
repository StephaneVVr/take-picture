import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";

import AppContainer from "./AppContainer";

const CameraTabComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
      <Text>Camera component</Text>
    </AppContainer>
  );
};

export default CameraTabComponent;
