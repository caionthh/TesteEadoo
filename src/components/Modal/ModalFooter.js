import React from 'react'
import { modalStyle } from '../../style/modalStyle';

const ModalFooter = ({children}) => {
    const mStyle = modalStyle();

  return (
    <div className={mStyle.modalFooter}>
        {children}
    </div>
  )
}

export default ModalFooter