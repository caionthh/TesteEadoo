import React from 'react'
import { modalStyle } from '../../style/modalStyle';

const ModalBody = ({children}) => {
    const mStyle = modalStyle();

  return (
    <div className={mStyle.modalBody}>
        {children}
    </div>  
  )
}

export default ModalBody