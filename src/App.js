import MenuSuperior from './components/MenuSuperior'
import InclusaoLivros from './components/InclusaoLivros'
import { Routes, Route } from 'react-router-dom'
import ManutencaoLivro from './components/ManutencaoLivro'
import ResumoLivro from './components/ResumoLivro'
function App() {
  return (
    <>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<InclusaoLivros />} />
        <Route path="/manut" element={<ManutencaoLivro />} />
        <Route path="/resumo" element={<ResumoLivro />} />
      </Routes>
    </>
  )
}

export default App
