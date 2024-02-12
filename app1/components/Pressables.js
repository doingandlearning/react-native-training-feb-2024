import { StyleSheet, Text, View, Button, TouchableHighlight, Pressable } from 'react-native';


export default function Pressables() {
    
  function handlePress() {
    console.log("I was pressed!!")
  }
  function handleLongPress() {
    console.log("I was long pressed!!")
  }
  
    return <View>
            <Button 
    title="Click me" 
    color="red"
    onPress={handlePress}
    ></Button>
    <TouchableHighlight 
      onPress={handlePress}
      onLongPress={handleLongPress}
      style={styles.touchable}
      activeOpacity={0.9}
      underlayColor="yellow"
    >
        <Text>Or click me!</Text>
    </TouchableHighlight>
    <Pressable
      style={styles.touchable}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      onPress={handlePress}
    >
      <Text>Click me again! I'm the best</Text>
    </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      // fontWeight: "bold"
    },
    textContent: {
      fontWeight: "bold",
      fontSize: 24
    },
    nestedContent: {
      color: 'red'
    },
    touchable: {
      borderRadius: 20,
      borderWidth: 2,
      padding: 10,
      margin: 8
    }
  });
  