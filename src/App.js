
import { useEffect, useState } from 'react';
import './App.css';
import breakPointObserver from './components/breakPointObserver';
import CadastrarPaciente from './components/CadastrarPaciente';
import RenderPacientes from './components/RenderPacientes';
import TopBar from './components/TopBar';
import TopMenu from './components/TopMenu';
import {useFetchPacientes} from './hooks/useFetchPacientes'
import { baseStyle } from './style/baseStyle';
import { modalStyle } from './style/modalStyle';

const breakpoints = {
  mobile: "(max-width: 600px)",
  tablet: "(min-width: 600px) and (max-width: 768px)",
  laptop: "(min-width: 769px) and (max-width: 1300px)",
  desktop: "(min-width: 1300px)",
}

function App() {

  //Watch Breakpoints
  const [breakpoint, setBreakpoint] = useState("desktop")
  useEffect(() => {
    breakPointObserver(breakpoints, setBreakpoint);
  }, [breakpoint])

  //Fetch Pacientes
  const { pacientes, httpConfig } = useFetchPacientes(process.env.REACT_APP_API_ENDPOINT)

  const [criarNovoPaciente, setCriarNovoPaciente] = useState(false)

  return (
    <div className="App">

      <TopBar breakpoint={breakpoint} pacienteHook={httpConfig} />

      <TopMenu breakpoint={breakpoint} setCriarNovoPaciente={setCriarNovoPaciente} />

      
      {criarNovoPaciente === true ? (
        <CadastrarPaciente breakpoint={breakpoint} setModal={setCriarNovoPaciente} pacienteHook={httpConfig} />
      ) : (
        <RenderPacientes breakpoint={breakpoint} pacientes={pacientes} pacienteHook={httpConfig} setCriarNovoPaciente={setCriarNovoPaciente}/>
      )}

    </div>
  );
}

export default App;