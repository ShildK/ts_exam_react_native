import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { UsersScreenNavigationProp } from "../types/navigationTypes";
import { TUser } from "../types/others";

type TProps = {
  user: TUser;
};

export const User = (props: TProps) => {
  const { user } = props;
  const navigation = useNavigation<UsersScreenNavigationProp>();

  const goToUserScreen = (): void => {
    navigation.navigate("UserScreen", { user });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToUserScreen}>
      <Image
        style={styles.image}
        source={{
          uri: user.avatar,
        }}
      />
      <View style={styles.userInfo}>
        <Text style={styles.text}>First name: {user.first_name}</Text>
        <Text style={styles.text}>Last name: {user.last_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const colors = {
  white: "#ffffff",
  orange: "#872131",
};

export const shadows = {
  shadow1: {
    shadowOpacity: 0.35,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 20,
    margin: 10,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: colors.white,
    ...shadows.shadow1,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 20,
    borderRadius: 100,
  },
  userInfo: {
    marginTop: 15,
  },
  text: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "600",
  },
});
