import React, { useEffect, useState } from 'react'
import { baseStyle } from '../style/baseStyle';
import { modalStyle } from '../style/modalStyle';
import Modal from './Modal/Modal';
import ModalBody from './Modal/ModalBody';
import ModalFooter from './Modal/ModalFooter';
import ModalTitle from './Modal/ModalTitle';
import { CheckCpf } from './CpfCheck';
import { FormataCPF } from './FormataCPF';
import { patientListStyle } from '../style/patientListStyle';

const RenderPacienteBig = ({ breakpoint, paciente, pacienteHook, setActiveIndex }) => {

  //Style
  const style = baseStyle({ breakpoint });
  const lStyle = patientListStyle({ breakpoint });
  const mStyle = modalStyle();

  //Mode
  const [editMode, setEditMode] = useState(false);
  const enableEditMode = () => {
    setUpdateInvalidMessage(false)
    setEditMode(true)
  }

  //Form Update
  const[nome, setNome] = useState(paciente.nome)
  const[sobrenome, setSobrenome] = useState(paciente.sobrenome)
  const[cpf, setCpf] = useState(paciente.cpf)
  const[telefone, setTelefone] = useState(paciente.telefone)
  const[cidade, setCidade] = useState(paciente.cidade)
  const[estado, setEstado] = useState(paciente.estado)

  const [nomeValid, setNomeValid] = useState(true)
  const [sobrenomeValid, setSobrenomeValid] = useState(true)
  const [cpfValid, setCpfValid] = useState(true)
  const [cidadeValid, setCidadeValid] = useState(true)
  const [estadoValid, setEstadoValid] = useState(true)

  const [updateInvalidMessage, setUpdateInvalidMessage] = useState(false)

  //Modal
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)
  const [confirmDiscardModal, setConfirmDiscardModal] = useState(false)
  const [confirmUpdateModal, setConfirmUpdateModal] = useState(false)

  const revertChanges = () => {
    setNome(paciente.nome)
    setSobrenome(paciente.sobrenome)
    setCpf(paciente.cpf)
    setTelefone(paciente.telefone)
    setCidade(paciente.cidade)
    setEstado(paciente.estado)

    setEditMode(false)
    setConfirmDiscardModal(false)
  }

    //Validações
    useEffect(() => {
      (nome === "" ? setNomeValid(false) : setNomeValid(true))
    }, [nome])
    useEffect(() => {
      (sobrenome === "" ? setSobrenomeValid (false) : setSobrenomeValid(true))
    }, [sobrenome])
    useEffect(() => {
      (CheckCpf(cpf) ? setCpfValid(true) : setCpfValid(false))
    }, [cpf])
    useEffect(()=> {
      (cidade === "" ? setCidadeValid(false) : setCidadeValid(true))
    }, [cidade])
    useEffect(() => {
      (estado === "" ? setEstadoValid(false) : setEstadoValid(true))
    }, [estado])

    //Update
    const validaUpdate = () => {
      if (nomeValid && sobrenomeValid && cpfValid && cidadeValid && estadoValid) {
        setUpdateInvalidMessage(false);
        setConfirmUpdateModal(true)
      }
      else{
        setUpdateInvalidMessage(true);
      }
    }
    const performUpdate = () => {
        const uPaciente = {
          nome,
          sobrenome,
          cpf,
          telefone,
          cidade,
          estado
      };
      pacienteHook(uPaciente, "PATCH", paciente.id)
      setConfirmUpdateModal(false);
      setEditMode(false);
    }

    //Delete
    const deletePaciente = () => {
      pacienteHook([], "DELETE", paciente.id)
    }
    

  return (
    <div>
      {(confirmDeleteModal) &&
        <Modal>
          <ModalTitle setModal={setConfirmDeleteModal}>Confirmação</ModalTitle>
          <ModalBody><p>Deseja remover este paciente?</p></ModalBody>
          <ModalFooter>
            <button className={[mStyle.modalBtn, style.btnRed].join(" ")} onClick={() => setConfirmDeleteModal(false)}>Cancelar</button>
            <button className={[mStyle.modalBtn, style.btnGreen].join(" ")} onClick={() => deletePaciente()} >Remover</button>
          </ModalFooter>
        </Modal>
      }
      {(confirmDiscardModal) &&
        <Modal>
          <ModalTitle setModal={setConfirmDiscardModal}>Confirmação</ModalTitle>
          <ModalBody><p>Deseja descartar as alterações?</p></ModalBody>
          <ModalFooter>
            <button className={[mStyle.modalBtn, style.btnRed].join(" ")} onClick={() => setConfirmDiscardModal(false)}>Não</button>
            <button className={[mStyle.modalBtn, style.btnGreen].join(" ")} onClick={() =>  revertChanges() } >Sim</button>
          </ModalFooter>
        </Modal>
      }
      {(confirmUpdateModal) &&
        <Modal>
          <ModalTitle setModal={setConfirmUpdateModal}>Confirmação</ModalTitle>
          <ModalBody><p>Deseja atualizar as informações deste paciente?</p></ModalBody>
          <ModalFooter>
            <button className={[mStyle.modalBtn, style.btnRed].join(" ")} onClick={() => setConfirmUpdateModal(false)}>Não</button>
            <button className={[mStyle.modalBtn, style.btnGreen].join(" ")} onClick={() => performUpdate() } >Sim</button>
          </ModalFooter>
        </Modal>
      }


        <div className={lStyle.patientBig}>
                    
          {(editMode === true) ? (
            <div>
              <input className={(nomeValid ? (style.formInput) : ([style.formInput, style.formInputInvalid].join(" ")) )} type="text" value={nome} name="nome" onChange={(e) => setNome(e.target.value)} />
              <input className={(sobrenomeValid ? (style.formInput) : ([style.formInput, style.formInputInvalid].join(" ")) )} type="text" value={sobrenome} name="sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
            </div>
          ) : (
            <div className={(!editMode && lStyle.patientBigName)} onClick={() => setActiveIndex(-1)}>
            <p className={style.patientValueBig}>{paciente.nome} {paciente.sobrenome}</p>
            </div>
          )}

          {breakpoint === "desktop" && (
          <div className={lStyle.patientValueContainer}>
            <table style={{width: '100%'}}>

              <thead>
                <tr>
                  <td className={lStyle.patientCol}><p className={lStyle.headerTitle}>CPF</p></td>
                  <td className={lStyle.patientCol}><p className={lStyle.headerTitle}>Telefone</p></td>
                  <td className={lStyle.patientCol}><p className={lStyle.headerTitle}>Cidade</p></td>
                  <td className={lStyle.patientCol}><p className={lStyle.headerTitle}>Estado</p></td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                  {(editMode === true) ? (
                  <>
                    <input className={(cpfValid ? (style.formInput) : ([style.formInput, style.formInputInvalid].join(" ")) )} type="text"  value={cpf} name="cpf" onChange={(e) => setCpf(e.target.value)} />
                  </>
                  ) : (
                    <p className={lStyle.patientDataBig}>{FormataCPF(paciente.cpf)}</p>
                  )}
                  </td>
                  <td>
                    {(editMode === true) ? (
                    <>
                      <input className={style.formInput} type="text" value={telefone} name="telefone" onChange={(e) => setTelefone(e.target.value)} />
                    </>
                    ) : (
                      <p className={lStyle.patientDataBig}>{paciente.telefone}</p>
                    )}
                  </td>
                  <td>
                    {(editMode === true) ? (
                    <>
                      <input className={(cidadeValid ? (style.formInput) : ([style.formInput, style.formInputInvalid].join(" ")) )} type="text" value={cidade} name="cidade" onChange={(e) => setCidade(e.target.value)} />
                    </>
                    ) : (
                      <p className={lStyle.patientDataBig}>{paciente.cidade}</p>
                    )}
                  </td>
                  <td>
                    {(editMode === true) ? (
                      <select className={(estadoValid ? (style.formInput) : ([style.formInput, style.formInputInvalid].join(" ")) )} name="estado" onChange={(e) => setEstado(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                        </select>
                      ) : (
                        <p className={lStyle.patientDataBig}>{paciente.estado}</p>
                      )}
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
          )}

          {/* Modo para telas menores */}
          {breakpoint !== "desktop" && (
            <div className={lStyle.patientValueContainerSmall}>
              <div>
                <div><p className={lStyle.headerTitle}>CPF</p></div>
                {(editMode === true) ? (
                  <>
                    <input className={(cpfValid ? (style.formInput) : ([style.formInput, style.formInputInvalid].join(" ")) )} type="text"  value={cpf} name="cpf" onChange={(e) => setCpf(e.target.value)} />
                  </>
                  ) : (
                    <p className={lStyle.patientDataBig}>{FormataCPF(paciente.cpf)}</p>
                  )}
              </div>
              <div>
                <div><p className={lStyle.headerTitle}>Telefone</p></div>
                {(editMode === true) ? (
                    <>
                      <input className={style.formInput} type="text" value={telefone} name="telefone" onChange={(e) => setTelefone(e.target.value)} />
                    </>
                    ) : (
                      <p className={lStyle.patientDataBig}>{paciente.telefone}</p>
                )}
              </div>
              <div>
                <div><p className={lStyle.headerTitle}>Cidade</p></div>
                {(editMode === true) ? (
                    <>
                      <input className={(cidadeValid ? (style.formInput) : ([style.formInput, style.formInputInvalid].join(" ")) )} type="text" value={cidade} name="cidade" onChange={(e) => setCidade(e.target.value)} />
                    </>
                    ) : (
                      <p className={lStyle.patientDataBig}>{paciente.cidade}</p>
                )}
              </div>
              <div>
                <div><p className={lStyle.headerTitle}>Estado</p></div>
                {(editMode === true) ? (
                      <select className={(estadoValid ? (style.formInput) : ([style.formInput, style.formInputInvalid].join(" ")) )} name="estado" onChange={(e) => setEstado(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                        </select>
                      ) : (
                        <p className={lStyle.patientDataBig}>{paciente.estado}</p>
                      )}
              </div>
            </div>
          )}

          {((editMode && updateInvalidMessage) && (
            <>
              <div className={style.errorBox} >
                <p>Todos os campos obrigatórios devem ser preenchidos.</p>
              </div>
              {!cpfValid && (
                <div className={style.errorBox}>
                  <p>O CPF inserido não é válido.</p>
                </div>
              )}
            </>)
          )}

          <div className={style.patientControls}>
            {(editMode === true) ? (
              <>
                <button className={[style.buttonSmall, style.btnBlue, style.patientBtn].join(" ")} onClick={() => setConfirmDiscardModal(true)}>Cancelar</button>
                <button className={[style.buttonSmall, style.btnGreen, style.patientBtn].join(" ")} onClick={() => validaUpdate()}>Salvar</button>
              </>
                  ) : (
              <>
                <button className={[style.buttonSmall, style.btnBlue, style.patientBtn].join(" ")} onClick={() => enableEditMode(true)} >Editar</button>
                <button className={[style.buttonSmall, style.btnBlue, style.patientBtn].join(" ")} onClick={() => setConfirmDeleteModal(true) } >Remover</button>
              </>
            )}
          </div>
        </div>
    </div>
  )
}

export default RenderPacienteBig