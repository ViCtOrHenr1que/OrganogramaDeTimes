import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from "hex-to-rgba";


// passando as props desestruturadas:
const Time = ({ colaboradores, time, aoDeletar, mudarCor, aoFavoritar}) => {

  //Cores do Objeto do App.js passadas pelo props
  const cssCorDeFundo = { backgroundColor: hexToRgba(time.cor, '0.6') };
  const cssCorDoBorderBottom = { borderColor: time.cor };
  //.

  return colaboradores.length > 0 ? (
    <section className="time" style={cssCorDeFundo}>
      <input
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
        value={time.cor}
        type="color"
        className="input-cor"
      />
      <h3 style={cssCorDoBorderBottom}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => {
          return (
            <Colaborador
              corDeFundo={time.cor}
              colaborador={colaborador}
              key={indice}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  ); //fim do ternário
};

export default Time;
