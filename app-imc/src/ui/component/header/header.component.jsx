import { useGlobalUser } from "../../../context/user.context";
import "./header.style.css";

export function Header() {
  const [, setGlobalUser] = useGlobalUser();

  function handleLogout() {
    setGlobalUser([]);
  }

  return (
    <header className="header__comp">
      <h1 className="header_title">imc</h1>
      <button className="header_btn_sair" onClick={handleLogout}>
        Sair
      </button>
    </header>
  );
}
