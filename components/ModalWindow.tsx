import { Dispatch, SetStateAction } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { TSetBoolean } from "../types/others";
import { ButtonV1 } from "./ButtonV1";

type TProps = {
  modalVisible: boolean
  setModalVisible: TSetBoolean
  error: string
  setError: Dispatch<SetStateAction<string>>
}

export const ModalWindow = (props: TProps) => {
  const { modalVisible, setModalVisible, error, setError } = props

  const closeModalWindow = (): void => {
    setModalVisible(!modalVisible);
    setError("")
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>{error}</Text>
          <ButtonV1
            onPress={closeModalWindow}
            title="Закрыть"
            disabled={false}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    width: "85%",
    marginTop: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
