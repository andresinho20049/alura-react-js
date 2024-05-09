import { ReactNode } from "react";
import "./Botao.css";

type BotaoPropsType = {
  children: ReactNode;
};

const Botao = ({ children }: BotaoPropsType) => {
  return <button className="botao">{children}</button>;
};

export default Botao;
