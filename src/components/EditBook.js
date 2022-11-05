import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { inAxios } from '../config_axios'
import { useForm } from 'react-hook-form'

const EditBook = () => {
  const { register, handleSubmit, reset } = useForm()
  let [book, setBook] = useState({
    id: null,
    titulo: '',
    autor: '',
    foto: '',
    ano: null,
    preco: null
  })
  let { id } = useParams()
  const navigate = useNavigate()
  async function getData(bookId) {
    try {
      const livro = await inAxios.get(`livros/unico/${bookId}`)
      setBook(livro.data[0])
    } catch (error) {
      alert(`Erro... Não foi possível obter os dados: ${error}`)
    }
  }
  useEffect(() => {
    // fetch(`http://localhost:3001/livros/unico/${id}`)
    //   .then(response => response.json())
    //   .then(data => setBook(data[0]))
    getData(id)
  }, [id])

  async function editarLivro(fields) {
    try {
      await inAxios.put(`livros/${book.id}`, fields)
      alert('Livro alterado com sucesso')
      navigate('/manut')
    } catch (error) {
      alert(error)
    }

    reset({ titulo: '', autor: '', foto: '', ano: '', preco: '' })
  }

  return (
    <div className="container mt-3">
      <h1>Editar livro: {book.titulo} </h1>
      <form onSubmit={handleSubmit(editarLivro)}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            {...register('titulo', { required: true })}
            autoFocus
            required
            placeholder={book.titulo}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="autor">Autor:</label>
          <input
            type="text"
            className="form-control"
            {...register('autor')}
            id="autor"
            required
            placeholder={book.autor}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="foto">URL da Foto:</label>
          <input
            type="url"
            className="form-control"
            {...register('foto')}
            id="foto"
            required
            placeholder={book.foto}
          />
        </div>
        <div className="row mt-2">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="ano">Ano de Publicação:</label>
              <input
                type="number"
                className="form-control"
                {...register('ano')}
                id="ano"
                required
                placeholder={book.ano}
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="form-group">
              <label htmlFor="preco">Preço R$:</label>
              <input
                type="number"
                className="form-control"
                id="preco"
                {...register('preco')}
                step="0.01"
                required
                placeholder={book.preco}
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary my-3" value="Editar" />
        <input
          type="reset"
          className="btn btn-danger my-3 ms-3"
          value="Limpar"
        />
        {/* <button className=" ms-2 btn btn-success" onClick={() => getData()}>
          puxar dados
        </button> */}
      </form>
    </div>
  )
}

export default EditBook
