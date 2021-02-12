import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios'

export default function Cadastro () {

    const [categoria, setCategoria] = useState("computadores")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")
    const [preco_venda, setPreco_venda] = useState("")

    const history = useHistory()

    const cadastrar = () => {

        Axios.post('http://localhost:3001/cadastrar',
        {
            categoria: categoria,
            descricao: descricao,
            preco: preco,
            preco_venda: preco_venda
        }).then((response) => {
            console.log(response)
        })

        history.push({
            pathname: '/Produtos',
        })

        window.location.reload()
    }

    return (
        <div>
            <div className="w-75 mx-auto mt-3 titulo-cadastro">
                <h2 className="text-center my-3">Cadastro de Produto</h2>
            </div>

            <section className="container mt-4 d-flex justify-content-center">   

                <form method="POST" enctype="multipart/form-data" action="/cadastrar" className="form-group pl-5 py-4">
                    <label><b>Categoria: </b></label>

                    <select className="form-control w-50" name="categoria" onChange={(e) => {setCategoria(e.target.value)}}>
                        <option value="computadores">Computadores</option>
                        <option value="notebooks">Notebooks</option>
                        <option value="videogames">Videogames</option>
                        <option value="acessorios">Acessórios</option>
                    </select>
                    <br />

                    <label><b>Descrição: </b></label><br />
                    <textarea onChange={(e) => {setDescricao(e.target.value)}} className="form-control w-50" name="descricao" cols="2" rows="5"></textarea>
                    <br />

                    <label><b>Preço: </b></label>
                    <input onChange={(e) => {setPreco(e.target.value)}} type="number" name="preco" className="form-control w-25" />
                    <br />

                    <label><b>Preço com desconto: </b></label>
                    <input onChange={(e) => {setPreco_venda(e.target.value)}} type="number" name="preco_venda" className="form-control w-25" />
                    <br />

                    <input onClick={cadastrar} type="submit" className="btn btn-success" value="Cadastrar" />
                </form>
            </section>
        </div>
    );
}