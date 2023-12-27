import ConvIcon from "../../assets/convi-icon.svg";
import { Container, TopHeader } from "./styles";

// pagina de Cabeçalho
function Header() {
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
            <p>Ave. movie runtime: xxx min</p>
            <p>Ave. movie budget: $XXM</p>
          </div>
          <input type="text" placeholder="Finter movies by name" />
        </div>
      </Container>
    </>
  );
}

export default Header;
