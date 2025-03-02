import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, Dimensions,TextInput, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';


import { FlipType, SaveFormat, useImageManipulator } from 'expo-image-manipulator';

export default function SaveItem({navigation}: {navigation: any}) {
  
  const route = useRoute();
  const { height, width } = Dimensions.get('window');
  const { photo } = route.params
  const squareSize = height;
  if(route.params)
  {
    

    const [image, setImage] = useState(photo.uri);
    const context = useImageManipulator(photo.uri);
   
    const pheight = photo.height;
    const pwidth = photo.width;
    const cropImage = async () => {
      
      context.crop({
        height: pheight, 
        originX: pwidth / 2 - pheight / 2, 
        originY: 0, 
        width: pheight
      
  
                    });
  
      const image =  await context.renderAsync();
      const result = await image.saveAsync({
        format: SaveFormat.PNG,
      });
  
      setImage(result);
    };

    cropImage();
    return (
      <View style={styles.container}>
         <Image
        style={{borderColor:"#51b7f7",
          borderWidth:5,
          borderRadius:10,
          position: 'absolute',
          top: 0,
          left: width / 2 - squareSize / 2,
          width: squareSize,
          height: squareSize}}
        source={{uri:image.uri}}
      /><View style={{borderColor:"#51b7f7",
        borderWidth:5,
        borderRadius:10,
        position: 'absolute',
        top: 0,
        left: width / 2 - squareSize / 2,
        width: squareSize,
        height: squareSize}}>
    </View>
    <View style={styles.input}>
    
    <TextInput style={styles.tinput}
          placeholder='Type what is this?'  
        />
        <View style={styles.br} />
      <TouchableOpacity style={styles.button} onPress={()=>false}>
          <Text>🌿</Text>
        </TouchableOpacity>
        <View style={styles.br} />
        <TouchableOpacity style={styles.button} onPress={()=>false}>
          <Text>🐴</Text>
        </TouchableOpacity>
        <View style={styles.br} />
        <TouchableOpacity style={styles.button} onPress={()=>false}>
          <Text>🧰</Text>
        </TouchableOpacity>
        <View style={styles.br} />
       <Button title="Save Item" 
                onPress={() => navigation.navigate("Camera")} 
    />
    </View>
    <View style={styles.placeholder}></View>
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
    backgroundColor:"#000011",
    flexDirection: 'row',
    alignItems: "center",
  },
  item:{
    width: "100%",
    height: "100%",
  },
  backbtn:{
      position: 'absolute',
      top: 5,
      left: 5
  },
  input:{ 
      backgroundColor:"#ffffff",
      
      color:"#fefefe"

  },
  text:{color:"#fefefe"},
  tinput:{borderWidth: 10},
  placeholder:{flex:10},
  button:{width:100,paddingLeft:10},
  br:{padding:5}
});
