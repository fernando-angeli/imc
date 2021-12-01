import "./container.style.css";
import { Header } from "..";

export function Container({ children }) {
  return (
    <section className="container">
      <Header />
      <div className="container_comp__div">{children}</div>
    </section>
  );
}
