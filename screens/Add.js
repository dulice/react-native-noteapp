import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { COLOR, SIZE } from "../styles/constants";
import Icon from "react-native-vector-icons/Ionicons";
import { Context } from "../context/ListsContext";

export default function Add({ navigation }) {
  const { dispatch } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddList = () => {
    dispatch({
      type: "ADD_LIST",
      payload: {
        id: new Date().valueOf(),
        title,
        description,
        date: new Date().toLocaleString(),
      },
    });
    navigation.navigate("Home");
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleAddList}>
          <Icon name="checkmark-outline" size={25} color={COLOR.success} />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text>{new Date().toLocaleString()}</Text>
      <TextInput
        style={styles.descriptionInput}
        multiline
        placeholder="Start typing..."
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: SIZE.lg,
    padding: SIZE.xl,
  },
  titleInput: {
    fontSize: 30,
    fontWeight: "bold",
  },
  descriptionInput: {
    fontSize: 18,
  },
});
