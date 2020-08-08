/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState, useEffect} from 'react';
import PageDefault from '../../../Componentes/PageDefault';
import FormField from '../../../Componentes/FormField';
import Button from '../../../Componentes/Button';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '#ffffff',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(props) {
    const { name, value } = props.target;
    setValue(
      name,
      value,
    );
  }
  useEffect(() => {
    const URL_DB = 'http://localhost:8080/Categorias';

    fetch(URL_DB)
      .then(async (respostadoservidor) => {
        const resposta = await respostadoservidor.json();
        setCategorias([
          ...resposta,
        ]);
      })
      .then((converteu) => {
        console.log(converteu);
      });
  });
  return (
    <PageDefault>
      <h1>
        Cadastro da categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(Props) {
        Props.preventDefault();
        setCategorias([...categorias, values]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descrição"
          value={values.descrição}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
        <ul>
          {categorias.map((categoria, indice) => (
            <li key={`${categoria.nome}`}>
              <h1 style={{ color: categoria.cor }}>{categoria.nome}</h1>
              <p>{categoria.descrição}</p>
            </li>
          ))}
        </ul>
      </form>
    </PageDefault>
  );
}
