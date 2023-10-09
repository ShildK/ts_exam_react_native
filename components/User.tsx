import { FC, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { UsersScreenNavigationProp } from "../types/navigationTypes";
import { TSetState, TUser } from "../types/others";
import { colors } from "../configs/colors";
import { shadows } from "../configs/shadows";
import { borders } from "../configs/borders";
import { UsersContext } from "../contexts/UsersContext";

type TProps = {
  user: TUser;
};

export const User: FC<TProps> = (props) => {
  const { users, setUsers } = useContext(UsersContext);
  const { user } = props;
  const navigation = useNavigation<UsersScreenNavigationProp>();

  const goToUserScreen = (): void => {
    navigation.navigate("UserScreen", { user });
  };

  const deleteUser = (): void => {
    const userId = user.id
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
 };


  return (
    <TouchableOpacity style={styles.container} onLongPress={deleteUser} onPress={goToUserScreen}>
      <Image
        style={styles.image}
        source={{
          uri: user.avatar,
        }}
      />
      <View style={styles.userInfo}>
        <Text style={styles.text}>{user.first_name} {user.last_name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    ...borders.bordersV1
    // padding: 15,
    // borderRadius: 10,
    // backgroundColor: colors.white,
    // ...shadows.shadow1
  },
  
  image: {
    width: 90,
    height: 90,
    marginRight: 20,
    borderRadius: 100,
  },
  userInfo: {
    marginTop: 10,
  },
  text: {
    marginVertical: 3,
    fontSize: 20,
    fontWeight: "600",
  },
  email: {
    fontSize: 16,
    color: "grey"
  },
});
