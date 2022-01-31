import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

type ButtonProps = {
  onPress: () => void,
  title: string,
  color: string,
};

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  text: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

const Button = (props: ButtonProps) => {
  const buttonStyle = StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: props.color,
    }
  });

  return (
    <View>
      <TouchableOpacity style={buttonStyle.container} onPress={props.onPress}>
        <Text style={styles.text}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

Button.defaultProps = {
  color: "#009688",
}


export default Button;
