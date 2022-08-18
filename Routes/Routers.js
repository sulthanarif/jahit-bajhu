import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transaksi from "../Screens/Transaksi";
import Tracking from "../Screens/Tracking";

const Stack = createNativeStackNavigator();

export default function Routers() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Invoice CV4567" component={Transaksi} />
      <Stack.Screen name="Tracking" component={Tracking} />
    </Stack.Navigator>
  );
}
