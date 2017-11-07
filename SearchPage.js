"use strict";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image
} from "react-native";
import SearchResults from "./SearchResults";

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
    country: "uk",
    pretty: "1",
    encoding: "json",
    listing_type: "buy",
    action: "search_listings",
    page: pageNumber
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + "=" + encodeURIComponent(data[key]))
    .join("&");

  return "http://localhost:4000/patients?cedula=" + querystring;
}
export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchString: "", message: "", isLoading: false };
  }
  _onSearchTextChanged = event => {
    this.setState({
      searchString: event.nativeEvent.text
    });
  };
  _executeQuery = query => {
    console.log(query);
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => {console.log(json);this._handleResponse(json)})
      .catch(error =>
        this.setState({
          isLoading: false,
          message: "Something bad happened " + error
        })
      );
  };
  _handleResponse = response => {
    this.setState({
      isLoading: false,
      message: ""
    });
    if (response.length > 0) {
      this.props.navigator.push({
        title: "Results",
        component: SearchResults,
        passProps: {
          listings: response[0]
        }
      });
    } else {
      this.setState({
        message: "Donante no encontrado. Intente de nuevo por favor"
      });
    }
  };
  _onSearchPressed = () => {
    const query = "http://localhost:4000/patients?cedula="+this.state.searchString
    this._executeQuery(query);
  };
  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return <View style={styles.container}>
        <Text style={styles.description}>Ingrese su identificación</Text>
        <View style={styles.flowRight}>
          <TextInput style={styles.searchInput} value={this.state.searchString} onChange={this._onSearchTextChanged} placeholder="Cedula, NUIP, Pasaporte" />
        </View>
        <Button onPress={this._onSearchPressed} color="#48BBEC" title="Buscar donante" />
        {/* <Image source={require("./Resources/house.png")} style={styles.image} /> */}
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565"
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  },
  flowRight: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch"
  },
  searchInput: {
    textAlign:"center",
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 8,
    color: "#48BBEC"
  },
  image: {
    width: 217,
    height: 138
  }
});
