import { useEffect, useState } from "react"
import { baseStyle } from "../style/baseStyle"
import { CheckCpf } from "./CpfCheck";

const CadastrarPaciente = ({ breakpoint, setModal, pacienteHook }) => {

    const style = baseStyle({ breakpoint });

    const[nome, setNome] = useState("")
    const[sobrenome, setSobrenome] = useState("")
    const[cpf, setCpf] = useState("")
    const[telefone, setTelefone] = useState("")
    const[cidade, setCidade] = useState("")
    const[estado, setEstado] = useState("")

    const [nomeValid, setNomeValid] = useState(true)
    const [sobrenomeValid, setSobrenomeValid] = useState(true)
    const [cpfValid, setCpfValid] = useState(true)
    const [cidadeValid, setCidadeValid] = useState(true)
    const [estadoValid, setEstadoValid] = useState(true)

    const [firstValidate, setFirstValidate] = useState(false)

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

    const validate = () => {
        setFirstValidate(true)
        if (nomeValid && sobrenomeValid && cpfValid && cidadeValid && estadoValid) {
            submit();
            setModal(false)
            setFirstValidate(false);
        }
    }

    const submit = async () => {
        const paciente = {
            nome,
            sobrenome,
            cpf,
            telefone,
            cidade,
            estado
        };
        pacienteHook(paciente, "POST")
    }

  return (
    <>
    <div className={style.appContainer}>
        <h2 className={style.titleSmall} >Adicionar Paciente</h2>
    </div>

    <div className={[style.appContainer, style.appBody].join(" ")} >
      <div className={style.formPatient}>
          <form className={style.formPatient}>
              <label className={style.formLabel}>
                  <p className={style.formInputTitle}>Nome: *</p>
                  <input className={
                    (nomeValid || !firstValidate) ? (style.formInput)
                    : ([style.formInput, style.formInputInvalid].join(" "))
                  } type="text" value={nome} name="nome" onChange={(e) => setNome(e.target.value)} />
              </label>
              <label className={style.formLabel}>
                  <p className={style.formInputTitle}>Sobrenome: *</p>
                  <input className={
                    (sobrenomeValid || !firstValidate) ? (style.formInput)
                    : ([style.formInput, style.formInputInvalid].join(" "))
                  } type="text" value={sobrenome} name="sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
              </label>
              <label className={style.formLabel}>
                  <p className={style.formInputTitle}>CPF (Apenas números): *</p>
                  <input className={
                    (cpfValid || !firstValidate) ? (style.formInput)
                    : ([style.formInput, style.formInputInvalid].join(" "))
                  } type="text" value={cpf} name="cpf" onChange={(e) => setCpf(e.target.value)} />
              </label>
              <label className={style.formLabel}>
                  <p className={style.formInputTitle}>Telefone:</p>
                  <input className={style.formInput} type="text" value={telefone} name="telefone" onChange={(e) => setTelefone(e.target.value)} />
              </label>
              <label className={style.formLabel}>
                  <p className={style.formInputTitle}>Cidade: *</p>
                  <input className={
                    (cidadeValid || !firstValidate) ? (style.formInput)
                    : ([style.formInput, style.formInputInvalid].join(" "))
                  } type="text" value={cidade} name="cidade" onChange={(e) => setCidade(e.target.value)} />
              </label>
              <label className={style.formLabel}>
                <p className={style.formInputTitle}>Estado: *</p>
                <select className={
                    (estadoValid || !firstValidate) ? (style.formInput)
                    : ([style.formInput, style.formInputInvalid].join(" "))
                  } name="estado" onChange={(e) => setEstado(e.target.value)}>
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
              </label>
          </form>
          <p>* Obrigatório</p>

          {(firstValidate && (!nomeValid || !sobrenomeValid || !cidadeValid || !estadoValid)) &&
          (
            <div className={style.errorBox} >
              <p>Todos os campos obrigatórios devem ser preenchidos.</p>
            </div>
          )}
          {(firstValidate && !cpfValid) &&
          (
            <div className={style.errorBox}>
              <p>O CPF inserido não é válido.</p>
            </div>
          )}

      </div>

      <div className={style.appFooter}>
        <button className={[style.button, style.btnRed].join(" ")} onClick={() => setModal(false)}>Cancelar</button>
        <button className={[style.button, style.btnGreen].join(" ")} onClick={() => validate()}>Cadastrar</button>
      </div>

    </div>
    </>
  )
}

export default CadastrarPaciente