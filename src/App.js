import MenuSuperior from './components/MenuSuperior'
import InclusaoLivros from './components/InclusaoLivros'
import { Routes, Route } from 'react-router-dom'
import ManutencaoLivro from './components/ManutencaoLivro'
import ResumoLivro from './components/ResumoLivro'
import EditBook from './components/EditBook'
function App() {
  return (
    <>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<InclusaoLivros />} />
        <Route path="/manut" element={<ManutencaoLivro />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/resumo" element={<ResumoLivro />} />
      </Routes>
    </>
  )
}

export default App
