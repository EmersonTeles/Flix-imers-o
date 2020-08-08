import React from 'react';
import PageDefault from '../../../Componentes/PageDefault';
import {Link} from 'react-router-dom';

export default function CadastroVideo (){
    return(
        <PageDefault>
            <h1>Aqui videos serão adicionados rsrs</h1>
            <Link to="/cadastro/categoria">
                Adicionar categoria.
            </Link>
        </PageDefault>
    );
}

