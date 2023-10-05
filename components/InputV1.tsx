import { TextInput, StyleSheet } from "react-native";
import { TOnChangeText, TStyles } from "../types/others";

type TProps = {
  placeholder: string;
  onChangeText: TOnChangeText;
  value: string;
  style?: TStyles;
};

export const InputV1 = (props: TProps) => {
  const { placeholder, onChangeText, value, style, ...rest } = props;

  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      {...rest}
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
