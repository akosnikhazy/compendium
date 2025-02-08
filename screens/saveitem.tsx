import { Button, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function SaveItem({navigation}: {navigation: any}) {
  
  const route = useRoute();
  const { height, width } = Dimensions.get('window');
  const squareSize = height;
  if(route.params)
  {

    return (
      <View style={styles.container}>
         <Image
        style={styles.item}
        source={{uri:route.params.photo.uri}}
      /><View style={{borderColor:"#51b7f7",
        borderWidth:5,
        borderRadius:10,
        position: 'absolute',
        top: 0,
        left: width / 2 - squareSize / 2,
        width: squareSize,
        height: squareSize}}>
    </View>
        <Text>Ez </Text>
        <View style={styles.backbtn}>
        <Button title="🔙" 
                    onPress={() => navigation.navigate("Camera")} 
        /></View>
      </View>
      
    );
  } 
  else 
  {
    return (<View><Text>Error</Text></View>)

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item:{
    width: "100%",
    height: "100%",
    },backbtn:{
      position: 'absolute',
      top: 5,
      left: 5
    },
});
