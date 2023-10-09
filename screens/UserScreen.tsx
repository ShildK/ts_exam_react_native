import { useNavigation, useRoute } from "@react-navigation/native";
import {
   View,
   Image,
   Text,
   StyleSheet,
   ImageBackground,
   TouchableOpacity,
} from "react-native";
import { useContext, FC } from "react";
import { Layout } from "../components/Layout";
import { UsersContext } from "../contexts/UsersContext";
import {
   UserScreenNavigationProp,
   UserScreenRouteProp,
} from "../types/navigationTypes";
import { colors } from "../configs/colors";

export const UserScreen: FC = () => {
   const navigation = useNavigation<UserScreenNavigationProp>();
   const { params } = useRoute<UserScreenRouteProp>();
   const { users, setUsers } = useContext(UsersContext);

   const deleteUser = (): void => {
      const newUsers = users.filter((user) => user.id !== params.user.id);
      setUsers(newUsers);
      navigation.navigate("UsersScreen");
   };

   return (
      <Layout style={{ padding: 0 }}>
         <ImageBackground
            source={require("../assets/gradient.png")}
            resizeMode="cover"
            style={styles.background}
         >
            <Text style={styles.title}>
               {params.user.first_name} {params.user.last_name}
            </Text>

            <Image
               style={styles.image}
               source={{
                  uri: params.user.avatar,
               }}
            />

            <Text style={styles.email}>{params.user.email}</Text>
            <Text style={styles.text}>About user:  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
            <TouchableOpacity style={{ }} onPress={deleteUser}>
               <Text style={styles.buttonDelete}>Delete</Text>
            </TouchableOpacity>
         </ImageBackground>
      </Layout>
   );
};

const styles = StyleSheet.create({
   background: {
      width: "100%",
      height: "110%",
      paddingVertical: 20,
      alignItems: "center"
   },
   buttonDelete: { 
    color: colors.purple,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20
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
      borderRadius: 100,

   },
   email: {
      marginVertical: 5,
      fontSize: 18,
      fontWeight: "500",
   },
   text: {
    margin: 20,
    fontSize: 14,
    color: "grey",
 },
});
