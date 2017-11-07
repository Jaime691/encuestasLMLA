"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
  Button,
  PickerIOS
} from "react-native";
import SurveyPage from "./SurveyPage";

export default class SearchResults extends Component {
  _onPressStart = () => {
    console.log('button pressed')
    this.props.navigator.push({
      title: "Encuesta",
      component: SurveyPage
    });
  };

  render() {
    const {
      nombres,
      apellido1,
      apellido2,
      cedula,
      direccion,
      email,
      empresa,
      fechanat,
      genero,
      receptor
    } = this.props.listings;

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 15, color: "black" }}>Nombre: {nombres}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>
          Apellido 1: {apellido1}
        </Text>
        <Text style={{ fontSize: 15, color: "black" }}>
          Apellido 2: {apellido2}
        </Text>
        <Text style={{ fontSize: 15, color: "black" }}>Cedula: {cedula}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>
          Dirección: {direccion}
        </Text>
        <Text style={{ fontSize: 15, color: "black" }}>Email: {email}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>Empresa: {empresa}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>
          Fecha de nacimiento: {fechanat}
        </Text>
        <Text style={{ fontSize: 15, color: "black" }}>Genero: {genero}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>
          Receptor: {receptor}
        </Text>
        <View style={styles.flowRight}>
          {/* <Button color="#48BBEC" title="Guardar" /> */}
          <Button
            onPress={this._onPressStart}
            color="#48BBEC"
            title="Iniciar"
          />
          <Button onPress={() => {}} color="#48BBEC" title="Salir" />
        </View>
      </View>
    );
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
