import { TimeType } from "../../types/TimeType";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
}: TimeType) => {
  const css = { backgroundColor: corSecundaria };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={css}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              corDeFundo={corPrimaria}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              time={colaborador.time}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
