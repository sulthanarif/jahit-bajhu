import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import Routers from "./Routes/Routers";
import BottomTabs from "./Routes/BottomTabs";
import Tracking from "./Screens/Tracking";
export default function App() {
  return (
    // <NavigationContainer>
    //   <BottomTabs />
    // </NavigationContainer>
    <Tracking />
  );
}
