import { useEffect } from "react";
import api from "../../services/api";

// pagina Home
function Home() {
  // Chamada a api
  useEffect(() => {
    async function loadData() {
      const {
        data: { docs },
      } = await api.get("movie");

      console.log(docs);
    }

    loadData();
  }, []);

  return (
    <div>
      <h1>Hello Moviesss</h1>
    </div>
  );
}

export default Home;
