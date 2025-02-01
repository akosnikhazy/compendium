import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as FileSystem from 'expo-file-system';

const compendiumFolder = FileSystem.documentDirectory + 'compendium/';
const plantsFolder = FileSystem.documentDirectory + 'compendium/plants/';
const animalsFolder = FileSystem.documentDirectory + 'compendium/animals/';
const objectsFolder = FileSystem.documentDirectory + 'compendium/objects/';

async function ensureDirExists() {
  const compendiumDirInfo = await FileSystem.getInfoAsync(compendiumFolder);
  if (!compendiumDirInfo.exists) {
   
    await FileSystem.makeDirectoryAsync(compendiumFolder, { intermediates: true });
  }

  const plantsDirInfo = await FileSystem.getInfoAsync(plantsFolder);
  if (!plantsDirInfo.exists) {
   
    await FileSystem.makeDirectoryAsync(plantsFolder, { intermediates: true });
  }

  const animalsDirInfo = await FileSystem.getInfoAsync(animalsFolder);
  if (!animalsDirInfo.exists) {
   
    await FileSystem.makeDirectoryAsync(animalsFolder, { intermediates: true });
  }

  const objectsDirInfo = await FileSystem.getInfoAsync(objectsFolder);
  if (!objectsDirInfo.exists) {
   
    await FileSystem.makeDirectoryAsync(objectsFolder, { intermediates: true });
  }
}

export default function SaveItem() {
  

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
