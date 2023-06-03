import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { COLOR, SIZE } from "../styles/constants";
import Icon from "react-native-vector-icons/Ionicons";
import { Context } from "../context/ListsContext";

const Edit = ({ route, navigation }) => {
  const { id } = route.params;
  const { state, dispatch } = useContext(Context);
  const { lists } = state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const list = lists.find((list) => list.id === id);
    setTitle(list.title);
    setDescription(list.description);
  }, [id]);

  const handleEdit = (id) => {
    dispatch({
      type: "UPDATE_LIST",
      payload: {
        id,
        title,
        description,
        date: new Date().toLocaleString(),
      },
    });
    navigation.navigate("Home");
  };

  const handleDelete = (id) => {
    dispatch({type: "DELTE_LIST", payload: {id}});
    navigation.navigate('Home');
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <TouchableOpacity onPress={() => handleEdit(id)} style={{marginEnd: SIZE.xl}}>
            <Icon name="checkmark" size={25} color={COLOR.success}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(id)}>
            <Icon name="trash" size={25} color={COLOR.danger}/>
          </TouchableOpacity>
        </>
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
};

export default Edit;

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
