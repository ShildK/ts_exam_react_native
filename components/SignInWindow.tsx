import { View, Text, StyleSheet, Modal, ImageBackground } from "react-native";
import { FC, useContext, useState } from "react";
import { TSetState } from "../types/others";
import { ButtonV1 } from "./ButtonV1";
import { InputV1 } from "./InputV1";
import { UsersContext } from "../contexts/UsersContext";

type TProps = {
   signInWindowVisible: boolean;
   setSignInWindowVisible: TSetState<boolean>;
};

export const SignInWindow: FC<TProps> = (props) => {
   const { signInWindowVisible, setSignInWindowVisible } = props;

   const { users, setIsAuthorized } = useContext(UsersContext);

   const [error, setError] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");

   const searchUser = (): void => {
      const user = users.find((user) => user.email === email);

      if (user) {
         setEmail("");
         setPassword("");
         setSignInWindowVisible(false);
         setTimeout(() => {
            setIsAuthorized(true);
         }, 0);
      } else {
         setError("Пользователь не найден");
      }
   };

   const closeModalWindow = (): void => {
      setError("");
      setEmail("");
      setPassword("");
      setSignInWindowVisible(false);
   };

   return (
      <Modal
         animationType="slide"
         transparent={true}
         visible={signInWindowVisible}
      >
         <View style={styles.modalView}>
            <ImageBackground
               imageStyle={{ borderRadius: 20 }}
               source={require("../assets/gradient.png")}
               resizeMode="cover"
               style={styles.image}
            >
               <View style={styles.inputWrapper}>
                  <InputV1
                     style={{ marginTop: "20%" }}
                     value={email}
                     placeholder="Email"
                     onChangeText={(email) => setEmail(email)}
                  />
                  <InputV1
                     style={{ marginTop: 10 }}
                     value={password}
                     placeholder="Password"
                     onChangeText={(password) => setPassword(password)}
                  />
                  {error && (
                     <Text style={{ color: "red", height: 50 }}>{error}</Text>
                  )}
               </View>

               <View style={styles.buttonWrapper}>
                  <ButtonV1
                     style={{ borderRadius: 25 }}
                     onPress={closeModalWindow}
                     title="Cancel"
                     disabled={false}
                  />
                  <ButtonV1
                     style={{ borderRadius: 25 }}
                     title="Sign in"
                     onPress={searchUser}
                     disabled={!(email && password)}
                  />
               </View>
            </ImageBackground>
         </View>
      </Modal>
   );
};

const styles = StyleSheet.create({
   image: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "space-between",
   },
   modalView: {
      marginTop: "55%",
   },
   buttonWrapper: {
      width: "80%",
      paddingBottom: 50,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-end",
   },
   inputWrapper: {
      width: "95%",
      alignItems: "center",
   },
});
