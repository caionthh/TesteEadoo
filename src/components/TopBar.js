import { useState } from "react";
import { topBarStyle } from "../style/topBarStyle";
import { baseStyle } from "./../style/baseStyle";

const TopBar = ({ breakpoint }) => {

    //Style
    const style = topBarStyle({ breakpoint });
    const bStyle = baseStyle({ breakpoint });

  return (
    <div className={style.topBar}>
      {(breakpoint === "mobile") ? (
        <div className={bStyle.appContainer}>
          <h1 className={bStyle.title}>Dashboard</h1>
        </div>
        ) : (
        <div className={bStyle.appContainer}>
          <h1 className={bStyle.title}>Dashboard / Cadastro de Pacientes</h1>
        </div>
      )}
    </div>
  )
}

export default TopBar