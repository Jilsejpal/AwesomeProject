import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>ScreenA</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}> Go to screen B</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontFamily: 'Lato-Italic',
  },
});
