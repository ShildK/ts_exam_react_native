import { useState, FC } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

import { ButtonV1 } from "../components/ButtonV1";
import { Layout } from "../components/Layout";
import { SignInWindow } from "../components/SignInWindow";

export const AuthorizationScreen: FC = () => {
   const [signInWindowVisible, setSignInWindowVisible] = useState<boolean>(false);

   return (
      <Layout style={{ alignItems: "center", padding: 0 }}>
         <ImageBackground
            source={require("../assets/bi.png")}
            resizeMode="cover"
            style={styles.image}
         >
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.text}>
               Welcome back to our app. Sign in to check out your friends
            </Text>
         </ImageBackground>
         <SignInWindow
            signInWindowVisible={signInWindowVisible}
            setSignInWindowVisible={setSignInWindowVisible}
         />

         <ButtonV1
            style={styles.button}
            title="Login"
            onPress={() => setSignInWindowVisible(true)}
            disabled={false}
         />
      </Layout>
   );
};

const styles = StyleSheet.create({
   image: {
      width: "100%",
      height: "83%",
      alignItems: "center",
      zIndex: 2,
   },
   title: {
      fontSize: 72,
      fontWeight: "700",
      color: "white",
      marginTop: "25%",
   },
   text: {
      width: "80%",
      fontSize: 18,
      color: "#FDECFE",
      fontWeight: "500",
      textAlign: "center",
      marginTop: "10%",
   },
   button: {
      width: "50%",
      borderRadius: 25,
      zIndex: 3,
   },
});
