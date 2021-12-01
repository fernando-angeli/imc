import "./button-delete.style.css";

export function ButtonDelete({ children, ...props }) {
  return (
    <button className="button-comp-red" {...props}>
      {children}
    </button>
  );
}
