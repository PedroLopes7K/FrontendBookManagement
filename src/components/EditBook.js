import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { inAxios } from '../config_axios'
import { useForm } from 'react-hook-form'

const EditBook = () => {
  const { register, handleSubmit, reset } = useForm()
  // let [book, setBook] = useState()
  let { id } = useParams()
  let book

  useEffect(() => {
    async function getData() {
      try {
        const livro = await inAxios.get(`livros/unico/${id}`)
        // setBook(livro.data[0])
        book = livro.data[0]
        console.log(book)
      } catch (error) {
        alert(`Erro... Não foi possível obter os dados: ${error}`)
      }
    }

    getData()
  }, [])

  async function editarLivro(fields) {
    try {
      await inAxios.put(`livros/${book.id}`, fields)
      alert('Livro alterado com sucesso')
    } catch (error) {
      alert(error)
    }

    reset({ titulo: '', autor: '', foto: '', ano: '', preco: '' })
  }
  // const getData = async () => {}

  return (
    <div className="container mt-3">
      <h1>Editar livro </h1>
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
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary my-3" value="Enviar" />
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
