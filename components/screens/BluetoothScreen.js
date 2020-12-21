import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import RNBluetoothClassic, {
  BTEvents,
  BTCharsets,
} from 'react-native-bluetooth-classic';
import Toast from 'react-native-simple-toast';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  deviceItem: {
    flex: 1,
  },
  connectionStatus: {
    backgroundColor: '#fff',
  },
  button: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  deviceName: {
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export const BluetoothScreen = (props) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    (async () => {
      let enabled = await RNBluetoothClassic.isEnabled();
      if (!enabled) {
        Toast.show('Bluetooth is disabled, please enable it');
        return;
      }
      let deviceList = [];
      try {
        deviceList = await RNBluetoothClassic.list();
      } catch (e) {
        console.log(e);
        Toast.show('Cannot get paired device list');
      }
      setDevices(deviceList);
    })();
  }, [setDevices]);

  const connectDevice = () => {};

  return (
    <View style={styles.root}>
      <Text>Paired devices:</Text>
      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={styles.container}>
        {devices.map((device, i) => {
          let bgColor = device.connected
            ? '#0f0'
            : styles.connectionStatus.backgroundColor;
          return (
            <TouchableOpacity
              key={device.id}
              style={styles.button}
              onPress={() => connectDevice(device)}>
              <View
                style={[styles.connectionStatus, {backgroundColor: bgColor}]}>
                <Text style={styles.deviceName}>{device.name}</Text>
                <Text>{device.address}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
