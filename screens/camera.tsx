import { CameraView, CameraType, useCameraPermissions} from 'expo-camera';
import { useState,  useRef  } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function CompendiumCamera({navigation}: {navigation: any}) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [photo, setPhoto] = useState();
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const { height, width } = Dimensions.get('window');
  const [message, setMessage] = useState('');
  const squareSize = height;

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>To use World Compendium the app needs access to your camera.</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
 /*
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
*/
  const takePicture = async () => {
    if (cameraRef.current) {
        let photo = await cameraRef.current.takePictureAsync({base64:true});
        // save photo to gallery
        MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
            setPhoto(undefined);
        });
        navigation.navigate("SaveItem",{photo});
            // jump to editor
    }
  };

  return (
  
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
      <View style={{borderColor:"#51b7f7",
            borderWidth:5,
            borderRadius:10,
            position: 'absolute',
            top: 0,
            left: width / 2 - squareSize / 2,
            width: squareSize,
            height: squareSize}}>
        </View>
        <View style={styles.backbtn}>
        <Button title="🔙" 
                    onPress={() => navigation.navigate("Home")} 
        /></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Capture Item</Text>
          </TouchableOpacity>
        </View>
        
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  backbtn:{
    position: 'absolute',
    top: 5,
    left: 5
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }
});
