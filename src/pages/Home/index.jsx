import { useEffect } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import { Container } from "../../components/Header/styles";
import { Container2 } from "./styles";
import Card from "../../components/Card";


// pagina Home
function Home() {
  // Chamada a api
  useEffect(() => {
    async function loadData() {
      const {
        data: { docs },
      } = await api.get("movie")

      console.log(docs)
    }

    loadData()
  }, [])

  return (
    <Container2>
      <Header />

      <Card />
      <h1>Hello Moviesss</h1>
    </Container2>
  )
}

export default Home;
