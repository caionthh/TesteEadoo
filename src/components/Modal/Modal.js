import { modalStyle } from "../../style/modalStyle"


const Modal = ({children}) => {
    const mStyle = modalStyle();

  return (
    <div className={mStyle.modalBackground}>
        <div className={mStyle.modalContainer}>
            {children}
        </div>
    </div>
  )
}

export default Modal