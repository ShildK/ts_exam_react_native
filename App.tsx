import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC, useEffect, useState } from "react";

import { UsersScreen } from "./screens/UsersScreen";
import { UserScreen } from "./screens/UserScreen";
import { Loaded } from "./screens/Loaded";
import { UsersContext } from "./contexts/UsersContext";
import { getUsers } from "./fetch";
import { AuthorizationScreen } from "./screens/AuthorizationScreen";
import { AddUserScreen } from "./screens/AddUserScreen";
import { TElement, TUser } from "./types/others";
import { RootStackParamList } from "./types/navigationTypes";
import { normalizeUser } from "./utils/normalizeUser";
import { colors } from "./configs/colors";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
   const [users, setUsers] = useState<TUser[]>([]);
   const [loaded, setLoaded] = useState<boolean>(false);

   const [isAuthorized, setIsAuthorized] = useState(false);

   useEffect(() => {
      (async () => {
         const users = await getUsers();
         const normalizeUsers = normalizeUser(users);
         setUsers(normalizeUsers);
         setLoaded(true);
      })();
   }, []);

   const getRoutes = (): TElement => {
      if (!loaded) {
         return (
            <Stack.Screen
               options={{ title: "" }}
               name="Loaded"
               component={Loaded}
            />
         );
      }

      if (!isAuthorized) {
         return (
            <Stack.Screen
               options={{ title: "Authorization", headerShown: false }}
               name="AuthorizationScreen"
               component={AuthorizationScreen}
            />
         );
      }

      return (
         <>
            <Stack.Screen
               options={{
                  title: "Users",
                  headerStyle: {
                     backgroundColor: colors.backgroundColor,
                  },
                  headerTintColor: colors.white,
                  headerTitleStyle: {
                     fontWeight: "bold",
                  },
               }}
               name="UsersScreen"
               component={UsersScreen}
            />
            <Stack.Screen
               options={{
                  title: "User",
                  headerStyle: {
                     backgroundColor: colors.backgroundColor,
                  },
                  headerTintColor: colors.white,
                  headerTitleStyle: {
                     fontWeight: "bold",
                  },
               }}
               name="UserScreen"
               component={UserScreen}
            />
            <Stack.Screen
               options={{
                  title: "Add new user",
                  headerStyle: {
                     backgroundColor: colors.backgroundColor,
                  },
                  headerTintColor: colors.white,
                  headerTitleStyle: {
                     fontWeight: "bold",
                  },
               }}
               name="AddUserScreen"
               component={AddUserScreen}
            />
         </>
      );
   };

   return (
      <UsersContext.Provider value={{ users, setUsers, setIsAuthorized }}>
         <NavigationContainer>
            <Stack.Navigator>
               {getRoutes()}
            </Stack.Navigator>
         </NavigationContainer>
      </UsersContext.Provider>
   );
};

export default App;
