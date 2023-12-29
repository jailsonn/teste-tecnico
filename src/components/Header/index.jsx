import { useEffect, useRef, useState } from "react";
import ConvIcon from "../../assets/convi-icon.svg";
import { Container, TopHeader } from "./styles";

// pagina de Cabeçalho
function Header({ movies, setFilteredMovies }) {
  const [aveValue, setAveValues] = useState({
    runtime: 0,
    budget: 0
  })



  const input = useRef();

  // tempo medio
  function aveMovies(movies){
    const runtime = movies.reduce((acc, cur) => cur.runtimeInMinutes + acc,0) / movies.length
    const budget = movies.reduce((acc, cur) => cur.budgetInMillions + acc,0) / movies.length

    setAveValues({
       runtime,
       budget,
    })
  }

  useEffect(() => {
    if (movies && movies.length > 0) {

      aveMovies(movies)
    }
  }, [movies])

  // função de filtrar os filmes
  function inputChange() {
    const newMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(input.current.value.toLowerCase())
    );

    aveMovies(newMovies)
    setFilteredMovies(newMovies);

    // console.log(input.current.value);
  }

  return (
    <>
      <TopHeader>
        <img src={ConvIcon} alt="Imagem de logo reade" />
        <p>Senior Front End Test</p>
      </TopHeader>
      <Container>
        <h1>Lord of the Rings Movies</h1>
        <div className="ave-values">
          <div>
            <p>Ave. movie runtime: {aveValue.runtime} min</p>
            <p>Ave. movie budget: ${aveValue.budget}M</p>
          </div>
          <input
            type="text"
            placeholder="Finter movies by name"
            ref={input}
            onChange={inputChange}
          />
        </div>
      </Container>
    </>
  );
}

export default Header;
