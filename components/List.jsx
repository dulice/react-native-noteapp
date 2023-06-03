import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLOR, SIZE } from "../styles/constants";

const List = ({ list, navigation }) => {
  // const [isPressing, setIsPressing] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.listBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { id: list.id })}
        >
          <Text style={styles.title}>{list.title}</Text>
          <Text style={styles.date}>{list.date}</Text>
          <Text numberOfLines={1} style={styles.description}>
            {list.description}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: SIZE.lg,
    borderRadius: SIZE.sm,
    backgroundColor: COLOR.light,
    marginVertical: SIZE.md,
  },
  listBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  date: {
    color: "gray",
    fontSize: 12,
    marginVertical: SIZE.md,
  },
  description: {
    fontSize: 18,
  },
});
