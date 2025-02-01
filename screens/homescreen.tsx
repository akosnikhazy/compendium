import { Text, View, Button, StyleSheet } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

export default function HomeScreen({navigation}: {navigation: any}) {
    
  return (
    <View
      style={styles.mainview}
    >
        <View
        style={styles.categorybar}
        ><Text
            style={styles.text}
            >Categires</Text>
            <View style={styles.br} />
            <View style={styles.br} />
            <Button color="#000011" title="🌿" onPress={() => null} />
            <View style={styles.br} />
            <Button  color="#000011"  title="🐴"  onPress={() => null}/>
            <View style={styles.br} />
            <Button  color="#000011"  title="🧰"  onPress={() => null}/>
            </View>
        <View style={styles.grid}>
            
        </View>
        <View style={styles.camerabtn}>
            <Button title="📷" 
                    onPress={() => navigation.navigate("Camera")} 
        /></View>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
      color:"#51b7f7"
    },
    mainview: {
        backgroundColor:"#000011",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    camerabtn:{
        position: 'absolute',
            right: 5,
            bottom: 5
    },
    categorybar:{
        height:"100%",
        flex:1,
        backgroundColor:"#222233",
        padding:20
    },
    grid:{
        flex:8
    },
    br:{
        padding:5
    }
});