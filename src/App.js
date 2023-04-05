
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';


function App() {


  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Sciense",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#D86EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FEBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);
  const inicial = [
    //Programação
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #57C278",
      time: "Programação",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #57C278",
      time: "Programação",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #57C278",
      time: "Programação",
    },
    //Front-End
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #82CFFA",
      time: "Front-End",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #82CFFA",
      time: "Front-End",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #82CFFA",
      time: "Front-End",
    },
    //Data Science
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #A6D157",
      time: "Data Sciense",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #A6D157",
      time: "Data Sciense",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #A6D157",
      time: "Data Sciense",
    },
    //Devops
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #E06B69",
      time: "Devops",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #E06B69",
      time: "Devops",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #E06B69",
      time: "Devops",
    },
    //UX e Design
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #D86EBF",
      time: "UX e Design",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #D86EBF",
      time: "UX e Design",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: " #D86EBF",
      time: "UX e Design",
    },
    //Mobile
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: "#FEBA05",
      time: "Mobile",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: "#FEBA05",
      time: "Mobile",
    },
    {
      id: uuidv4(),
      nome: "Victorr",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: "#FEBA05",
      time: "Mobile",
    },
    //Inovação e Gestão
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: "#FF8A29",
      time: "Inovação e Gestão",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: "#FF8A29",
      time: "Inovação e Gestão",
    },
    {
      id: uuidv4(),
      nome: "Victor",
      favorito: false,
      cargo: "Desenvolvedor FullStack",
      imagem: "https://github.com/ViCtOrHenr1que.png",
      cor: "#FF8A29",
      time: "Inovação e Gestão",
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])

  }

  function deletarColaborador(id) {
   setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime){
    setTimes([ ...times, { ...novoTime, id: uuidv4() } ])
  }

  function resolverFavorito (id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id ) colaborador.favorito = !colaborador.favorito
      return colaborador

      
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime = {cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          time={time}
          aoFavoritar={resolverFavorito}
          aoDeletar={deletarColaborador}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
