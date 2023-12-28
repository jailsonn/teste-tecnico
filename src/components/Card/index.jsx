import { Container2 } from "./styles";
import MovieIcon from "../../assets/movie-icon.svg";
import AwordIcon from "../../assets/award-icon.svg";

// Componente de Card
function Card({ movieData }) {
  return (
    <Container2>
      <div className="wrapper-image-logo">
        <img src={MovieIcon} alt="imagem de logo do card" />
      </div>

      {/* container de itens */}
      <div className="container-items">
        <div className="wrapper-items">
          <h3>{movieData.name}</h3>
          <p>{movieData.runtimeInMinutes} min</p>
        </div>

        <div className="wrapper-award">
          <img src={AwordIcon} alt="incone do valor" />
          <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
        </div>

        <div className="wrapper-budget">
          <div>
            <h4>Budget</h4>
            <p>${movieData.budgetInMillions}M</p>
          </div>

          <div>
            <h4>Revenue</h4>
            <p>${movieData.boxOfficeRevenueInMillions}M</p>
          </div>
        </div>
      </div>
    </Container2>
  );
}

export default Card;
