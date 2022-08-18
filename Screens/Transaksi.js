import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import ButtonMenu from "../Componenet/Button";
import Product from "../Componenet/Product";
import Payment from "../Componenet/DetailPembayaran";
import CheckButton from "../Componenet/ButtonTracking";

export default function Transaksi({navigation}) {
  const [Tanggal, setTanggal] = useState("");

  useEffect(() => {
    let date = new Date().toDateString();

    setTanggal(`${date}`);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Kode transaksi</Text>
          <Text style={styles.textCode}>CV4567</Text>
          <Text style={styles.textTanggal}>{Tanggal}</Text>
        </View>
        <ButtonMenu />
      </View>
      <Product />
      <View style={{ backgroundColor: "#fff", marginVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", margin: 5 }}>Barang Dikirim Ke:</Text>
        <View>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginBottom: 3 }}>
            Nama Penerima | No.Telp: 0895555555
          </Text>
          <Text style={{ fontSize: 14, marginHorizontal: 5, marginBottom: 10 }}>
            Alamat: Jl. Peta Selatan No.27, RT10/10
          </Text>
        </View>
      </View>
      <Payment />
      <CheckButton/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 10,
  },

  header: {
    color: "#adb8ae",
    fontSize: 10,
    marginHorizontal: 4,
  },

  textCode: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 3,
  },

  textTanggal: {
    color: "#adb8ae",
    textAlign: "center",
    fontSize: 10,
    marginRight: 6,
  },

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
