import { TUser } from "./others";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Loaded: undefined;
  AuthorizationScreen: undefined;
  UserScreen: {
    user: TUser;
  };
  UsersScreen: undefined;
  AddUserScreen: undefined;
};

export type UsersScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "UsersScreen"
>;

export type AddUserScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddUserScreen"
>;


export type UserScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "UserScreen"
>;

export type UserScreenRouteProp = RouteProp<RootStackParamList, "UserScreen">;
