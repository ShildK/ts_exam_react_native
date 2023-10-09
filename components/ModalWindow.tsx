import { FC } from "react"
import { View, Text, StyleSheet, Modal } from "react-native";
import { TSetState } from "../types/others";
import { ButtonV1 } from "./ButtonV1";

type TProps = {
  modalVisible: boolean
  setModalVisible: TSetState<boolean>
  error: string
  setError: TSetState<string>
}

export const ModalWindow: FC<TProps> = (props) => {
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
            style={{ height: 40 }}
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
    marginTop: "15%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
