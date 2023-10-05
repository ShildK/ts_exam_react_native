import { useContext, useState } from "react";
import { ButtonV1 } from "../components/ButtonV1";
import { InputV1 } from "../components/InputV1";
import { Layout } from "../components/Layout";
import { ModalWindow } from "../components/ModalWindow";
import { UsersContext } from "../contexts/UsersContext";

export const AuthorizationScreen = () => {
  const { users, setIsAuthorized } = useContext(UsersContext);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>("");

  const searchUser = (): void => {
    const user = users.find((user) => user.email === email);

    if (user) {
      setIsAuthorized(true);  
    } else {
      setModalVisible(true);
      setError("Пользователь не найден");
    }
  };

  return (
    <Layout style={{ justifyContent: "center", alignItems: "center" }}>
      <InputV1
        value={email}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
      />
      <InputV1
        value={password}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
      />
      <ButtonV1
        title="Sign in"
        onPress={searchUser}
        disabled={!(email && password)}
      />
      <ModalWindow
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        error={error}
        setError={setError}
      />
    </Layout>
  );
};

