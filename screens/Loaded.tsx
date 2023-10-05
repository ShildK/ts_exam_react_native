import { ActivityIndicator } from "react-native";
import { Layout } from "../components/Layout";

export const Loaded = () => {
  return (
    <Layout style={{ alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#bf5e5e" />
    </Layout>
  );
};
