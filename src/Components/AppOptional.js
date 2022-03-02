import { useState, useEffect } from 'react';
import '../index.css';
import { BotonAumentar, BotonCheck, BotonDisminuir } from './Boton';
import { passwordGenerator } from '../Functions/passwordGenerator';
import { Fila, Controles, Input } from '../Utilities/StylesApp';

const AppOptional = () => {
  const [configuration, setConfiguration] = useState({
    numeroCaracteres: 5,
    simbolos: false,
    numeros: false,
    mayusculas: false,
  });

  const [password, setPassword] = useState('');

  const { numeroCaracteres, simbolos, numeros, mayusculas } = configuration;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setPassword(passwordGenerator(configuration));
  }, [configuration]);

  const handleIncrement = () => {
    setConfiguration({
      ...configuration,
      numeroCaracteres: numeroCaracteres + 1,
    });
  };

  const handleDecrement = () => {
    if (numeroCaracteres <= 3) return;
    setConfiguration({
      ...configuration,
      numeroCaracteres: numeroCaracteres - 1,
    });
  };

  const handleChange = ({ target: { name } }) => {
    setConfiguration({ ...configuration, [name]: !configuration[name] });
  };

  return (
    <div className="contenedor">
      <center>
        <h1>React App - Password Generator</h1>
      </center>

      <form onSubmit={handleSubmit}>
        <Fila>
          <label>Número de carácteres: </label>
          <Controles>
            <BotonDisminuir handleDecrement={handleDecrement} />
            <span>{numeroCaracteres}</span>
            <BotonAumentar handleClick={handleIncrement} />
          </Controles>
        </Fila>
        <Fila>
          <label>¿Incluir simbolos?</label>
          <BotonCheck
            seleccionado={simbolos}
            handleClick={handleChange}
            name="simbolos"
          />
        </Fila>
        <Fila>
          <label>¿Incluir números?</label>
          <BotonCheck
            seleccionado={numeros}
            handleClick={handleChange}
            name="numeros"
          />
        </Fila>
        <Fila>
          <label>¿Incluir mayúsculas?</label>
          <BotonCheck
            seleccionado={mayusculas}
            handleClick={handleChange}
            name="mayusculas"
          />
        </Fila>
        <Input type="text" readOnly={true} value={password} />
      </form>
    </div>
  );
};

export default AppOptional;
