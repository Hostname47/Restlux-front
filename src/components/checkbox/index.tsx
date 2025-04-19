import TickIcon from "../icons/TickIcon";

type CheckboxType = {
  state: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Checkbox({ state, onClick }: CheckboxType) {
  return (
    <button className="checkbox" onClick={onClick}>
      {/* comment */}
      {state && <TickIcon className="tick" />}
    </button>
  );
}

export default Checkbox;
