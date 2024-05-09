import { ColaboradorType } from "../types/ColaboradorType";
import { TimeType } from "../types/TimeType";
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from "react";

interface IFormData {
  times: TimeType[];
  handlerAddNewColaborador: (colaborador: ColaboradorType) => void;
}

export const FormContext = createContext({} as IFormData);

export const useFormContext = () => {
  return useContext(FormContext);
};

interface IFormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: IFormProviderProps) => {
  const baseTimes: TimeType[] = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
      colaboradores: [],
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
      colaboradores: [],
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
      colaboradores: [],
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
      colaboradores: [],
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
      colaboradores: [],
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
      colaboradores: [],
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
      colaboradores: [],
    },
  ];

  const [times, setTimes] = useState(baseTimes);

  const handlerAddNewColaborador = useCallback((colaborador: ColaboradorType) => {

    const myNextList = [...times];
    const currentTime = myNextList.find((a) => a.nome === colaborador.time);
    currentTime.colaboradores = [...currentTime.colaboradores, colaborador];
    setTimes(myNextList);

  }, [times]);

  return <FormContext.Provider value={{times, handlerAddNewColaborador}}>{children}</FormContext.Provider>;
};
