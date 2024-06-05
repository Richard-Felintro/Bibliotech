import { Modal } from "react-native"
import { ConfirmModal } from "../Container/Container"


export const ModalConfirm = ({setShowModalConfirm,visible, ...rest})=>{
    return(
        <Modal
        {...rest}
        visible={visible}
        transparent = {true}
        animationType="fade"
        >

            <ConfirmModal></ConfirmModal>
        </Modal>
    )
}