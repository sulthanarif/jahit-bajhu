import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function DetailPembayaran() {
  return (
    <View style={{ backgroundColor: "#fff", marginVertical: 3 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", margin: 5, marginBottom: 10 }}>Ringkasan Pembayaran</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginBottom: 3 }}>Sub Total</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Diskon</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Biaya Kirim</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Kode Unik</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Total</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Status</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Metode Bayar</Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginBottom: 3 }}>Rp: 8.000.000</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>-</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Rp: 325.000</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Rp: 103</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Rp: 8.325.103</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Lunas</Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginVertical: 5 }}>Transfer BCA</Text>
        </View>
      </View>
    </View>
  );
}
