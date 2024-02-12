import React from "react";
import { View, FlatList, Button, StatusBar } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsArticle from "./components/NewsArticle";
import getStyles from "./styles";
import { newsData } from "./data";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const styles = getStyles(isDarkMode);
  const STATUS_BAR = Constants.statusBarHeight;
  console.log(STATUS_BAR);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header isDarkMode={isDarkMode} />
      <Button
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        onPress={toggleDarkMode}
      />
      <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <NewsArticle
            title={item.title}
            summary={item.summary}
            isDarkMode={isDarkMode}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Footer isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
};

export default App;
