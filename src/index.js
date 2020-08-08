import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home/App';
import CadastroVideo from './Pages/Cadastro/Video';
import CadastroCategoria from './Pages/Cadastro/Categoria';
import {BrowserRouter, Switch,Route} from 'react-router-dom';


const error404 = () => (<div>ERROR 404, POR FAVOR TENTE NOVAMENTE!</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/> 
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={error404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

