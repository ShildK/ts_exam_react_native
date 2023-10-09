import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
   FlatList,
   View,
   StyleSheet,
   TouchableOpacity,
   ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import { FC } from "react";

import { InputV1 } from "../components/InputV1";
import { Layout } from "../components/Layout";
import { User } from "../components/User";
import { UsersContext } from "../contexts/UsersContext";
import { UsersScreenNavigationProp } from "../types/navigationTypes";
import { colors } from "../configs/colors";

export const UsersScreen: FC = () => {
   const { users, setUsers } = useContext(UsersContext);
   const [searchInput, setSearchInput] = useState<string>("");
   const navigation = useNavigation<UsersScreenNavigationProp>();

   const foundUsers = users.filter((user) =>
      user.first_name.includes(searchInput)
   );

   

   return (
      <Layout style={{padding: 0}}>
         <ImageBackground
            source={require("../assets/gradient.png")}
            resizeMode="cover"
            style={styles.image}
         >
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
               <Icon name="add" color={colors.purple} size={50} />
            </TouchableOpacity>
         </ImageBackground>
      </Layout>
   );
};

const styles = StyleSheet.create({
  image: {
    padding: 10,
    height: "105%"
  },
   iconAdd: {
      position: "absolute",
      right: 20,
      bottom: 65,
      backgroundColor: colors.white,
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
