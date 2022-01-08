import React from 'react';
import { Text, StyleSheet, View, Button, Dimensions, TouchableOpacity } from 'react-native';

const DeviceWidth = Dimensions.get('window').width

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      title="Go to stats"
      onPress={() => {
        props.navigation.navigate('Components')
      }} />
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        flexDirection: 'row',
        backgroundColor: "grey"
      }}>

        <View>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginBottom: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginBottom: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginBottom: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>.</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginBottom: 1, marginLeft: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginBottom: 1, marginLeft: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginBottom: 1, marginLeft: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginLeft: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>0</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginBottom: 1, marginLeft: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginBottom: 1, marginLeft: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginBottom: 1, marginLeft: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: DeviceWidth * 0.2, height: DeviceWidth * 0.2, marginLeft: 1, backgroundColor: 'gray' }}>
            <Text style={{ textAlign: 'center', top: '50%', transform: [{ translateY: -10 }], borderRadius: 10 }}>x</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
});

export default HomeScreen;
