import { useContext, useState, FC } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { ButtonV1 } from "../components/ButtonV1";
import { InputV1 } from "../components/InputV1";
import { Layout } from "../components/Layout";
import { TUser } from "../types/others";
import { AddUserScreenNavigationProp } from "../types/navigationTypes";

const generateId = (): string => {
  return `${uuid.v4()}`;
};

export const AddUserScreen: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { users, setUsers } = useContext(UsersContext);
  const navigation = useNavigation<AddUserScreenNavigationProp>();

  const addUser = () => {
    const newUser: TUser = {
      id: generateId(),
      first_name: firstName,
      last_name: lastName,
      email,
      avatar: "https://clipart-library.com/images/ATbrxjpyc.jpg",
    };
    setUsers([newUser, ...users]);
    navigation.navigate("UsersScreen");
  };

  return (
    <Layout style={{ alignItems: "center" }}>
      <InputV1
        value={firstName}
        placeholder="First name"
        onChangeText={(name) => setFirstName(name)}
      />
      <InputV1
        value={lastName}
        placeholder="Last name"
        onChangeText={(name) => setLastName(name)}
      />
      <InputV1
        value={email}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
      />
      <ButtonV1
        title="Add"
        disabled={!(firstName && lastName && email)}
        onPress={addUser}
        style={{ width: "30%" }}
      />
    </Layout>
  );
};
