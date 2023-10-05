import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

import { UsersScreen } from "./screens/UsersScreen";
import { UserScreen } from "./screens/UserScreen";
import { useEffect, useState } from "react";
import { Loaded } from "./screens/Loaded";
import { UsersContext } from "./contexts/UsersContext";
import { getUsers } from "./fetch";
import { AuthorizationScreen } from "./screens/AuthorizationScreen";
import { AddUserScreen } from "./screens/AddUserScreen";
import { TElement, TUser } from "./types/others";
import { RootStackParamList } from "./types/navigationTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

const normalizeUser = (users: any): TUser[] => {
  return users.data.map((user: any) => {
    user.id = `${user.id}`;
    return user;
  });
};

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
          options={{ title: "Authorization" }}
          name="AuthorizationScreen"
          component={AuthorizationScreen}
        />
      );
    }

    return (
      <>
        <Stack.Screen
          options={{ title: "Users" }}
          name="UsersScreen"
          component={UsersScreen}
        />
        <Stack.Screen
          options={{ title: "User" }}
          name="UserScreen"
          component={UserScreen}
        />
        <Stack.Screen
          options={{ title: "Add new user" }}
          name="AddUserScreen"
          component={AddUserScreen}
        />
      </>
    );
  };

  return (
    <UsersContext.Provider value={{ users, setUsers, setIsAuthorized }}>
      <NavigationContainer>
        <Stack.Navigator>{getRoutes()}</Stack.Navigator>
      </NavigationContainer>
    </UsersContext.Provider>
  );
};

export default App;
