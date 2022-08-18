import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar, View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
export default function ButtonMenu() {
  const press = () => alert("Love u :*");
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={{ color: "#1ac42d" }}>Selesai</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={{
              padding: 3,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              borderColor: "#5fbcfa",
            }}
            onPress={press}
          >
            <View
              style={{
                paddingLeft: 14,
                width: 150,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#5fbcfa" }}>
                <Icon name="download" size={20} />
              </Text>
              <Text style={styles.btnText}>Unduh Invoice</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    height: "50%",
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    marginLeft: 40,
    justifyContent: "center",
    width: "55%",
    alignItems: "center",
  },

  btnText: {
    marginLeft: 10,
    color: "#5fbcfa",
    justifyContent: "center",
    width: "90%",
  },
});
