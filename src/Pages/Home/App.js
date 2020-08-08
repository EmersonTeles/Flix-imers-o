import React from 'react';

import Menu from '../../Componentes/Menu';
import Footer from '../../Componentes/Footer';
import Carrousel from '../../Componentes/Carrousel';
import BannerMain from '../../Componentes/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';

export default function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu/>
      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      videoDescription={"Escreva aqui a sua descrição"}
      url={dadosIniciais.categorias[0].videos[0].url}/>
      <Carrousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carrousel
      category={dadosIniciais.categorias[1]}
      />
      <Footer/>
    </div>
  );
  }
