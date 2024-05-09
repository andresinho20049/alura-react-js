# Alura - Curso de React
Este projeto foi desenvolvido no curso da Alura (Curso de React: desenvolvendo com JavaScript)
o desenvolvimento inicial do projeto foi acompanhando as atividades do curso e posteriormente converte o projeto para utilizar Typescript

## Começando com Create React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

[![en](https://img.shields.io/badge/lang-en-blue.svg)](https://github.com/andresinho20049/alura-react-js/blob/master/README.md)

## Comandos disponiveis

No terminal estando dentro da pasta do projeto, pode executar:

### `npm start`

Roda o app em modo de desenvolvimento.\
Abrir [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador.

A pagina será recarregada assim que for feito alguma mudança.\
Você também pode ver qualquer erro no console.

### `npm run build`

Cria o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

## Atividades do curso
O desenvolvimento do projeto foi baseado num design apresentado no [Figma](https://www.figma.com/), o objetivo do projeto é criar um formulário e após preenchimento do formulário criar um novo card com os dados preenchidos anteriormente.

O projeto no curso foi realizado com Javascript e após finalização do curso, alterei o projeto para utilizar Typescript, seguindo substitui pontos do código que era passado props para os components, reduzi alguns props utilizados criando contextos.

Utilizando context pude ter uma melhor organização no código e a função de save que era passada ao formulário via props, agora é executada no context com uso do hooks useCallbacks, reduzindo também os carregamentos da função.

Segue exemplo de como o contexto foi criado
```ts

  const [times, setTimes] = useState(baseTimes);

  const handlerAddNewColaborador = useCallback((colaborador: ColaboradorType) => {

    const myNextList = [...times];
    const currentTime = myNextList.find((a) => a.nome === colaborador.time);
    currentTime.colaboradores = [...currentTime.colaboradores, colaborador]; 
    setTimes(myNextList);

  }, [times]);

  return <FormContext.Provider value={{times, handlerAddNewColaborador}}>{children}</FormContext.Provider>;
```

Outro ponto a ser observado é que no projeto original do curso, a lista times e colaboradores são separadas e no momento de passar os colaboradores do time para renderizar é feito um filter.

Aqui a estrutura da lista de time é essa
```ts
type TimeType = {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
  colaboradores: ColaboradorType[];
};
```

Dessa forma a lista de colaboradores fica dentro do objeto de Time, e então no momento do cadastro é validado o time do colaborador e o mesmo é inserido na lista de time que lhe foi atribuido.

> Desenvolvedor André Carlos    
> Projeto: Alura - Curso de React     
> [Click aqui para visualizar o certificado](https://cursos.alura.com.br/user/andre-oliveira-98/course/react-desenvolvendo-javascript/certificate)
