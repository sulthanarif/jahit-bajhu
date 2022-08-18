import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
export default function Product() {
  return (
    <View style={styles.productContainer}>
      <Text style={styles.headerProduk}>Informasi Produk</Text>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ height: 140, width: 110, backgroundColor: "#eee", margin: 15, borderRadius: 13 }} />
          <View>
            <Text
              style={{
                fontSize: 16,
                width: "60%",
                marginHorizontal: 15,
                marginVertical: 15,
                marginBottom: 3,
                color: "#5fbcfa",
              }}
            >
              Nama Produk Boleh Panjang dan boleh, XL Grey
            </Text>
            <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 15, color: "#adb8ae" }}>
              SKU : 5677FGHHTY, Berat : 0,0600 kg
            </Text>
            <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 15, marginTop: 4, color: "#adb8ae" }}>
              Rp: 2.000.000 x 2
            </Text>
            <Text style={{ fontSize: 16, width: "60%", marginHorizontal: 15, marginTop: 10, textAlign: "right" }}>
              Rp: 4.000.000
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ height: 140, width: 110, backgroundColor: "#eee", margin: 15, borderRadius: 13 }} />
          <View style={{}}>
            <Text
              style={{
                fontSize: 16,
                width: "60%",
                marginHorizontal: 15,
                marginVertical: 15,
                marginBottom: 3,
                color: "#5fbcfa",
              }}
            >
              Nama Produk Boleh Panjang dan boleh, XL Grey
            </Text>
            <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 15, color: "#adb8ae" }}>
              SKU : 5677FGHHTY, Berat : 0,0600 kg
            </Text>
            <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 15, marginTop: 4, color: "#adb8ae" }}>
              Rp: 2.000.000 x 2
            </Text>
            <Text style={{ fontSize: 16, width: "60%", marginHorizontal: 15, marginTop: 10, textAlign: "right" }}>
              Rp: 4.000.000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "white",
    height: 400,
  },

  headerProduk: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
