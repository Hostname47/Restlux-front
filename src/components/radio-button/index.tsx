type RadioButtonType = {
  state: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function RadioButton({ state, onClick }: RadioButtonType) {
  return (
    <button className="radio" onClick={onClick}>
      {/* comment */}
      {state && <div className="circle" />}
    </button>
  );
}

export default RadioButton;
