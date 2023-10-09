import { FC } from "react";
import { TextInput, StyleSheet } from "react-native";
import { TOnChangeText, TStyled } from "../types/others";

type TProps = TStyled & {
  placeholder: string;
  onChangeText: TOnChangeText;
  value: string;
};

export const InputV1: FC<TProps> = (props) => {
  const { placeholder, onChangeText, value, style } = props;

  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowOpacity: 0.35,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    marginBottom: 20,
  },
});
