import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar, View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
export default function ButtonTracking() {
  const press = () => navigate('Tracking');
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
      <TouchableOpacity
        onPress={press}
        style={{ borderWidth: 1, padding: 15    , paddingHorizontal: 40, margin: 20, borderRadius:10, backgroundColor:"#2d2d2d"}}
      >
        <Text style={{color: "#f2f2f2"}}>Cek Tracking</Text>
      </TouchableOpacity>
    </View>
  );
}
