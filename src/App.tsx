import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import TimeContainer from "./componentes/TimeContainer";
import { FormProvider } from "./context/FormContext";

const App = () => {
  return (
    <div className="App">
      <FormProvider>
        <Banner />
        <Formulario />
        <TimeContainer />
      </FormProvider>
    </div>
  );
};

export default App;
