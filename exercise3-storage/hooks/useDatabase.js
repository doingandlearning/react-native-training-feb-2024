// http://api.openweathermap.org/data/2.5/weather?q=Manchester,UK&APPID=48f2d5e18b0d2bc50519b58cce6409f1

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addRecord, deleteRecord, createRecord } from "../utils/db";

export default function useEmployee() {
  const [weather, setWeather] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [history, setHistory] = React.useState([]);

  const addNew = (data) => addNewFunc(data, setWeather);

  return { weather, isLoading, getWeather, history, addNew };
}

async function addNewFunc(data, setWeather) {
  const oldData = weather;
  try {
    setWeather([...weather, data]);
    await addRecord(data);
  } catch (error) {
    setWeather(oldData);
  }
}
