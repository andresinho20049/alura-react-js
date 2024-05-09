import { useFormContext } from "../../context/FormContext";
import Time from "../Time";

const TimeContainer = () => {
  const { times } = useFormContext();

  return (
    <div>
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={time.colaboradores}
        />
      ))}
    </div>
  );
};

export default TimeContainer;
