import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import { InputV1 } from "../components/InputV1";
import { Layout } from "../components/Layout";
import { User } from "../components/User";
import { UsersContext } from "../contexts/UsersContext";
import { UsersScreenNavigationProp } from "../types/navigationTypes";

export const UsersScreen = () => {
  const { users } = useContext(UsersContext);
  const [searchInput, setSearchInput] = useState<string>("");
  const navigation = useNavigation<UsersScreenNavigationProp>();

  const foundUsers = users.filter((user) => user.first_name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <Layout>
      <View>
        <InputV1
          value={searchInput}
          placeholder="Search"
          style={{ width: "100%" }}
          onChangeText={(text) => setSearchInput(text)}
        />
      </View>
      <FlatList
        data={foundUsers}
        renderItem={({ item }) => <User user={item} />}
        keyExtractor={(user) => user.id}
      />
      <TouchableOpacity
        style={styles.iconAdd}
        onPress={() => navigation.navigate("AddUserScreen")}
      >
        <Icon name="add" color={"#bf5e5e"} size={50} />
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  iconAdd: {
    position: "absolute",
    right: 20,
    bottom: 35,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOpacity: 0.35,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  iconSearch: {
    position: "absolute",
    right: 10,
    top: 5,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOpacity: 0.35,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
});
