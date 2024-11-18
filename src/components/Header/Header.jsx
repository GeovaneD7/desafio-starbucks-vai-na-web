import { Link } from "react-router-dom";
import logo from "../../assets/starbucks-logo.svg";
import { StyledHeader } from "./headerStyle";

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <img src={logo} alt="Logo do Starbucks, Uma sereia coroada num fundo verde." />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">Novidades</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
