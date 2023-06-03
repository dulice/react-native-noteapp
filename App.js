import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Add, Edit, Home } from "./screens";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { COLOR } from "./styles/constants";
import { ContextProvider } from "./context/ListsContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{
              headerRight: () => (
                <>
                  <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Icon
                      name="checkmark-outline"
                      size={25}
                      color={COLOR.success}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="trash" size={25} color={COLOR.danger} />
                  </TouchableOpacity>
                </>
              ),
            }}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <Icon
                    name="checkmark-outline"
                    size={25}
                    color={COLOR.success}
                  />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
