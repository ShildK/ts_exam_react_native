import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Image, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { Layout } from "../components/Layout";
import { Icon } from "react-native-elements";
import { UsersContext } from "../contexts/UsersContext";
import {
  UserScreenNavigationProp,
  UserScreenRouteProp,
} from "../types/navigationTypes";

export const UserScreen = () => {
  const navigation = useNavigation<UserScreenNavigationProp>();
  const { params } = useRoute<UserScreenRouteProp>();
  const { users, setUsers } = useContext(UsersContext);

  const deleteUser = (): void => {
    const newUsers = users.filter((user) => user.id !== params.user.id);
    setUsers(newUsers);
    navigation.navigate("UsersScreen");
  };

  return (
    <Layout>
      <View style={styles.userHeader}>
        <Text style={styles.title}>
          {params.user.first_name} {params.user.last_name}
        </Text>
        <Icon name="delete" color={"red"} size={30} onPress={deleteUser} />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: params.user.avatar,
        }}
      />
      <Text style={styles.text}>First name: {params.user.first_name}</Text>
      <Text style={styles.text}>Last name: {params.user.last_name}</Text>
      <Text style={styles.text}>Email: {params.user.email}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 20,
    backgroundColor: "pink",
    margin: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  userHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },
  image: {
    width: 180,
    height: 180,
    marginVertical: 30,
  },
  userInfo: {
    marginTop: 15,
  },
  text: {
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "500",
  },
});
