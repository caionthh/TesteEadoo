import React from 'react'
import { modalStyle } from '../../style/modalStyle';

const ModalTitle = ({setModal, children}) => {
    const mStyle = modalStyle();

  return (
    <div>
        <div className={mStyle.modalTitle}>
            {children}
            <button onClick={() => setModal(false)} className={mStyle.modalTitleBtn}> X </button>
        </div>
    </div>
  )
}

export default ModalTitle