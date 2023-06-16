import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import WebView from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';


function Mapa() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de acesso à localização negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Buscando localização...';

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `${location.coords.latitude}, ${location.coords.longitude}`;
  }

  return (
    <WebView style={styles.mapa} source={{ uri: `https://www.google.com/maps/search/?api=1&query=${text}` }}>
      <StatusBar hidden={true} />
    </WebView>
  );
}


export default Mapa;

const styles = StyleSheet.create({
    mapa: {
        flex: 1,
        // width: 150,

    }
})