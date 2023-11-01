import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Barrota from "../components/Barrota";

export default function TabBar() {
  return (
    <NavigationContainer independent={true}>
      <Barrota />
    </NavigationContainer>
  );
}
