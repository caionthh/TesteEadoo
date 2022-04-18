import { useState } from "react";
import { baseStyle } from "../style/baseStyle";
import { topMenuStyle } from "../style/topMenuStyle";

const TopMenu = ({ breakpoint, setCriarNovoPaciente }) => {

    const tMenuStyle = topMenuStyle({ breakpoint });
    const bStyle = baseStyle({ breakpoint });

    return (
        <div className={bStyle.appContainer}>
            <div className={tMenuStyle.topMenu} >
                <button className={[bStyle.button, bStyle.btnGreen, tMenuStyle.topMenuBtn].join(" ")} onClick={() => setCriarNovoPaciente(true)}>Novo Paciente</button>
            </div>
        </div>
    )
}

export default TopMenu