import "./Campo.css";

// { label, obrigatorio = false, placeholder, type = 'text', valor }

const Campo = ({aoAlterado,  label, obrigatorio = false, placeholder, type = 'text', valor }) => {
  // let valor = '';


  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };
  return (
    <div className={`campo campo-${type}`}>
      <label> {label} </label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
