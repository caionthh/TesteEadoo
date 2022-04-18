
import { useState } from "react";
import { baseStyle } from "../style/baseStyle"
import RenderPacienteBig from "./RenderPacienteBig";
import Desert from "./../assets/nothingDesert.png";
import { patientListStyle } from "../style/patientListStyle";

const RenderPacientes = ( {breakpoint, pacientes, pacienteHook, setCriarNovoPaciente}) => {

  const [activeIndex, setActiveIndex] = useState(-1);

  const style = baseStyle({ breakpoint });
  const lStyle = patientListStyle({ breakpoint });

  const RenderEmpty = () => {
    return (
      <div className={lStyle.patientListEmpty} style={{ backgroundImage: `url(${Desert})`}}>
          <div style={{margin: 'auto'}}>
              <p style={{margin: '15px 0px 5px 0px', fontWeight: 'bold'}}>Parece deserto aqui.</p>
              <p style={{margin: '10px 0px 5px 0px', fontWeight: 'bold'}}>Tente começar</p>
              <button className={[style.button, style.btnGreen].join(" ")} onClick={() => setCriarNovoPaciente(true)}>Cadastrando um novo Paciente</button>
          </div>
      </div>
    )
  }

  const RenderPaciente = (paciente) => {
  
    if (activeIndex === paciente.id) {
      return (
        <td colSpan={5}>
          <RenderPacienteBig breakpoint={ breakpoint } paciente={paciente} pacienteHook={ pacienteHook } setActiveIndex={setActiveIndex} />
        </td>
      )
    }
    else {
      return (
        <>
            <td className={lStyle.patientDataSmall}>{paciente.nome} {paciente.sobrenome}</td>

            {(breakpoint === "desktop" || breakpoint === "laptop" || breakpoint === "tablet") && (
              <>
              <td className={lStyle.patientDataSmall}>{paciente.cpf}</td>
              </>
            )}

            {(breakpoint === "desktop" || breakpoint === "laptop") && (
              <>
              <td className={lStyle.patientDataSmall}>{paciente.telefone}</td>
              </>
            )}

            {breakpoint === "desktop" && (
              <>
              <td className={lStyle.patientDataSmall}>{paciente.cidade}</td>
              <td className={lStyle.patientDataSmall}>{paciente.estado}</td>
              </>
            )}
        </>
      )
    }
  }

  const RenderPacientes = () => {

    return (
      <>
        <div className={style.patientCount}>
          <div>
            <p className={style.patientCountTitle} >Cadastros Ativos</p>
            <p className={style.patientCountValue} >{pacientes.length}</p>
          </div>
        </div>

        <div className={style.patientPage}>
            <p className={style.patientPageItem}>Exibindo {pacientes.length} Pacientes</p>
        </div>

        <table className={lStyle.patientTable}>

          <thead className={lStyle.patientHeader}>
            <tr className={lStyle.patientRow}>

              <td className={lStyle.patientCol}>
                <p className={lStyle.headerTitle}>Nome</p>
              </td>

              {(breakpoint === "desktop" || breakpoint === "laptop" || breakpoint === "tablet") && (
                <>
                <td className={lStyle.patientCol}>
                <p className={lStyle.headerTitle}>CPF</p>
                </td>
                </>
              )}

              {(breakpoint === "desktop" || breakpoint === "laptop") && (
                <>
                <td className={lStyle.patientCol}>
                <p className={lStyle.headerTitle}>Telefone</p>
                </td>
                </>
              )}

              {breakpoint === "desktop" && (
                <>
                <td className={lStyle.patientCol}><p className={lStyle.headerTitle}>Cidade</p></td>
                <td className={lStyle.patientCol}><p className={lStyle.headerTitle}>Estado</p></td>
                </>
              )}


            </tr>
          </thead>

          <tbody>
            {
              pacientes.map((paciente) => (
                ((activeIndex === paciente.id) ? (
                  <tr key={paciente.id} className={
                  (paciente.id === activeIndex) ? 
                  lStyle.patientRow :
                  [lStyle.patientRow, lStyle.patientSmall].join(" ")
                  }>
                  {RenderPaciente(paciente)}
                  </tr>
                  ) : (
                  <tr key={paciente.id} className={
                  (paciente.id === activeIndex) ? 
                  lStyle.patientRow :
                  [lStyle.patientRow, lStyle.patientSmall].join(" ")

                  } onClick={() => setActiveIndex(paciente.id)}>
                  {RenderPaciente(paciente)}
                  </tr>
                ))
              ))
            }
          </tbody>

        </table>
      </>
    )
  }


  return (
    <>
      <div className={style.appContainer}>
        <h2 className={style.titleSmall} >Cadastro de Pacientes</h2>
      </div>
      <div className={[style.appContainer, style.appBody, lStyle.patientList].join(" ")}>
        {(pacientes.length === 0) ? (RenderEmpty()) : (RenderPacientes()) }
      </div>
    </>
  )
}

export default RenderPacientes