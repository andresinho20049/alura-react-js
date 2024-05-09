import "./ListaSuspensa.css";

type ListaSuspensaType = {
  obrigatorio: boolean;
  label: string;
  itens: string[];
  valor: string;
  aoAlterado: (valor: string) => void;
};

const ListaSuspensa = ({
  label,
  itens,
  obrigatorio,
  valor,
  aoAlterado,
}: ListaSuspensaType) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        value={valor}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
