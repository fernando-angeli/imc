import "./loader.style.css";
import { loader } from "../../assets";

export function Loader({ ...props }) {
  return (
    <div className="loader" {...props}>
      <img className="loader-div" src={loader} alt="" />
    </div>
  );
}
