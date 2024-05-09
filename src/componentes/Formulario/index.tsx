import { useFormContext } from "../../context/FormContext";
import { ColaboradorType } from "../../types/ColaboradorType";
import { FormEvent, useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const { times, handlerAddNewColaborador } = useFormContext();
  const nomeTimes = times.map((t) => t.nome);

  const initialData: ColaboradorType = {
    nome: "",
    cargo: "",
    imagem: "",
    time: ""
  } 
  const [colaborador, setColaborador] = useState(initialData);
  
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    handlerAddNewColaborador(colaborador);
    setColaborador(initialData);
  };

  return (
    <section className="formulario">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={colaborador.nome}
          aoAlterado={(valor) =>
            setColaborador({ ...colaborador, nome: valor })
          }
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={colaborador.cargo}
          aoAlterado={(valor) =>
            setColaborador({ ...colaborador, cargo: valor })
          }
        />
        <CampoTexto
          obrigatorio={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={colaborador.imagem}
          aoAlterado={(valor) =>
            setColaborador({ ...colaborador, imagem: valor })
          }
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={nomeTimes}
          valor={colaborador.time}
          aoAlterado={(valor) =>
            setColaborador({ ...colaborador, time: valor })
          }
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
