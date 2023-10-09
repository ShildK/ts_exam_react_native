import { ActivityIndicator } from "react-native";
import { FC } from "react";
import { Layout } from "../components/Layout";

export const Loaded: FC = () => {
  return (
    <Layout style={{ alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#bf5e5e" />
    </Layout>
  );
};
