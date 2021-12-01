import "./button.style.css";

export function Button({ children, color, ...props }) {
  const bgColor = color ? `button-comp-${color}` : "";
  return (
    <button className={`button-comp ${bgColor}`} {...props}>
      {children}
    </button>
  );
}
