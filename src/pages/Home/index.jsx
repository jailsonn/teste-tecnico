import { useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import { Container2, ContainerItems } from "./styles";
import Card from "../../components/Card";

// pagina Home
function Home() {
  // usar um estado
  const [movies, setMovies] = useState();
  const [filteredMovies, setFilteredMovies] = useState();

  // Chamada a api
  useEffect(() => {
    async function loadData() {
      const {
        data: { docs },
      } = await api.get("movie");

      setMovies(docs);
      setFilteredMovies(docs)
      console.log(docs);
    }

    loadData();
  }, []);

  return (
    <Container2>
      <Header movies={movies} setFilteredMovies={setFilteredMovies} />

    <ContainerItems>
      {filteredMovies &&
        filteredMovies.map((movie) => <Card movieData={movie} key={movie._id} />)}
    </ContainerItems>
    </Container2>
  );
}

export default Home;
