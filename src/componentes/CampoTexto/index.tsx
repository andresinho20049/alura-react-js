import "./CampoTexto.css";

type CampoTextoPropsType = {
  obrigatorio: boolean;
  label: string;
  valor: string;
  placeholder: string;
  aoAlterado: (valor: string) => void;
};

const CampoTexto = ({
  obrigatorio,
  label,
  placeholder,
  valor,
  aoAlterado,
}: CampoTextoPropsType) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CampoTexto;
