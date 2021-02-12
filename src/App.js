import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

const Header = lazy( () => import('./components/Header'))
const Footer = lazy( () => import('./components/Footer'))
const Index = lazy( () => import('./paginas/Index'))
const Cadastro = lazy( () => import('./paginas/Cadastro'))
const Produtos = lazy( () => import('./paginas/Produtos'))
const Lojas = lazy( () => import('./paginas/Lojas'))
const FaleConosco = lazy( () => import('./paginas/FaleConosco'))
const Login = lazy (() => import('./paginas/Login')) // --> 'Login' é o componente a ser renderizado no SSR

export default class App extends React.Component {

  constructor() {
    super();
    this.state=({
      db: []
    });
    this.exibirProdutos();
  }

  exibirProdutos() {
    fetch("http://localhost:3001/produtos")
    .then((response) => response.json())
    .then((responseJson) =>
    {
      this.setState({
        db: responseJson
      });
      console.log(this.state.db)
    })
  }

  render() {
    return (
        <div>
          <Suspense fallback={
            <div className="div-loading">
              <p className="text-secondary loading">Carregando página...</p>
            </div>
          }>
            <Header />
              <Switch>
                <Route exact path="/">
                  <Redirect to="/Index" />
                </Route>
                  <Route path="/Index" component={Index}/>
                  <Route path="/Cadastro" component={Cadastro}/>
                  <Route path="/Produtos" render={() => <Produtos arrayProdutos={this.state.db} /> } />
                  <Route path="/Lojas" component={Lojas}/>
                  <Route path="/Fale-Conosco" component={FaleConosco}/>
                  <Route path="/Login" component={Login}/>
              </Switch>
            <Footer />
          </Suspense>
        </div>
      )
    }
}