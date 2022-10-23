import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { inAxios } from '../config_axios'
import { useForm } from 'react-hook-form'

const EditBook = () => {
  const { register, handleSubmit, reset } = useForm()
  let [book, setBook] = useState()
  let { id } = useParams()

  useEffect(() => {
    const getBookInfo = async () => {
      try {
        console.log(`O id do livro e: ${id}`)
        const lista = await inAxios.get('livros')
        let arrayBooks = lista.data
        for (let obj of arrayBooks) {
          if (obj.id == id) {
            console.log(obj)
            setBook(obj)
          }
        }
      } catch (error) {
        alert(`Erro... Não foi possível obter os dados: ${error}`)
      }
    }
    getBookInfo()
  }, [id])

  function editarLivro() {
    console.log('bora editar')
  }

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
            required
            value={book.titulo}
            autoFocus
            {...register('titulo')}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="autor">Autor:</label>
          <input
            type="text"
            className="form-control"
            id="autor"
            value={book.autor}
            required
            {...register('autor')}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="foto">URL da Foto:</label>
          <input
            type="url"
            className="form-control"
            id="foto"
            value={book.foto}
            required
            {...register('foto')}
          />
        </div>
        <div className="row mt-2">
          <div className="col-sm-4">
            <div className="form-group">
              <label htmlFor="ano">Ano de Publicação:</label>
              <input
                type="number"
                className="form-control"
                id="ano"
                value={book.ano}
                required
                {...register('ano')}
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
                value={book.preco}
                step="0.01"
                required
                {...register('preco')}
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
      </form>
    </div>
  )
}

export default EditBook
