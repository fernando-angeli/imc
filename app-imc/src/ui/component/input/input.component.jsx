import "./input.style.css";
import InputMask from "react-input-mask";

export function Input({ onChange, textalign, ...props }) {
  const { label, size } = props;
  const inputSize = size ? `${size}px` : "280px";

  function handleChange(event) {
    const { name, value } = event.target;
    onChange(name, value);
  }

  return (
    <div className="input" style={{ width: inputSize }}>
      {label && <label className="input__label">{label}</label>}
      <InputMask
        mask={props.mask}
        className={`input__input`}
        {...props}
        autoComplete="off"
        onChange={handleChange}
        textalign={textalign}
      />
    </div>
  );
}

Input.defaultProps = {
  onChange: () => {},
};
