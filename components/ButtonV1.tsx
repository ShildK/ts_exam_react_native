import { FC } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { TStyled } from "../types/others";
import { colors } from "../configs/colors";

type TProps = TStyled & {
  title: string;
  onPress: () => void;
  disabled: boolean;
};

export const ButtonV1: FC<TProps> = (props) => {
  const { title, onPress, disabled, style } = props;
  
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "45%",
    height: 50,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontWeight: "500",
  },
});
