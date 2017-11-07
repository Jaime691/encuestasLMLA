"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text
} from "react-native";


export default class SearchResults extends Component {
  render() {
      console.log(this.props.listings);
      const {nombres,apellido1
,apellido2
,cedula
,direccion
,email
,empresa
,fechanat
,genero
,receptor} = this.props.listings;
      console.log(nombres);
    return <View style={styles.container}>
          <Text style={{ fontSize: 15, color: "black" }} >
          {nombres}
        </Text>
        <Text style={{ fontSize: 15, color: "black" }}>{apellido1}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>{apellido2}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>{cedula}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>{direccion}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>{email}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>{empresa}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>{fechanat}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>{genero}</Text>
        <Text style={{ fontSize: 15, color: "black" }}>{receptor}</Text>
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
});
