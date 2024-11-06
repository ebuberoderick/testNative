import "../global.css";
import { Slot, Stack } from "expo-router";
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler } from "react-native";
import { Provider } from "react-redux";
import reduxStore from "../Store/index";
import { PersistGate } from 'redux-persist/integration/react'

export default function Layout() {
  const { store, persistor } = reduxStore()

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.prompt('Hold on!', 'Are you sure you want to go back?');
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Slot />
      </PersistGate>
    </Provider>
  )
}
