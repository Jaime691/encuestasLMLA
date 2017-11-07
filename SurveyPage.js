import React, { Component } from 'react';
import { StyleSheet,View, Text, CheckBox } from "react-native";

export default class SurveyPage extends Component {
    
    render() {
        return <View style={styles.container}>
            <Text style={{ fontSize: 15, color: "black" }}>
              Detalles de la encuesta
            </Text>
          </View>;
    }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: "#dddddd"
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#48BBEC"
  },
  title: {
    fontSize: 20,
    color: "#656565"
  },
  rowContainer: {
    flexDirection: "row",
    padding: 10
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "flex-start"
  },
  flowRight: {
    flexDirection: "row",
    alignItems: "center",
    // alignSelf: "stretch"
    borderColor: "#656565"
  }
});
