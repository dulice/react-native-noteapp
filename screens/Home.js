import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR, SIZE } from "../styles/constants";
import List from "../components/List";
import { Context } from "../context/ListsContext";
import NoNote from "../components/NoNote";
import { SearchBar } from 'react-native-elements';

export default function Home({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const { state } = useContext(Context);
  const { lists } = state;
  const [filterLists, setFilterLists] = useState(lists);

  const handleInputChange = (text) => {
    setSearchText(text);
    const filteredData = lists.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase())
    ).sort((a,b) => b.id - a.id);
    if(filteredData.length === 0) {
      return (<NoNote />)
    }
    setFilterLists(filteredData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
      <SearchBar
        placeholder="Search Note..."
        onChangeText={handleInputChange}
        value={searchText}
        lightTheme
        containerStyle={styles.inputBox}
        inputContainerStyle={styles.inputText}
      />
        <ScrollView>
          {lists.length === 0 ? (
            <NoNote />
          ) : searchText.length > 0 ? (
            filterLists.map((list) => (
              <List list={list} navigation={navigation} key={list.id} />
            ))
          ) : (
            [...lists]
              .sort((a, b) => b.id - a.id)
              .map((list) => (
                <List list={list} navigation={navigation} key={list.id} />
              ))
          )}
        </ScrollView>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate("Add")}
        >
          <Icon name="add" size={40} color={COLOR.light} />
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: SIZE.xl,
    flex: 1,
  },
  inputBox: {
    backgroundColor: COLOR.light,
    borderRadius: 50,
  },
  inputText: {
    backgroundColor: "transparent",
    borderWidth: 0
  },
  addBtn: {
    borderRadius: 30,
    backgroundColor: COLOR.primary,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});
