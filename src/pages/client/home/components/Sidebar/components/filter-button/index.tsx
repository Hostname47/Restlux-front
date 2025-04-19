import { PropsWithChildren } from "react";
import Checkbox from "../../../../../../../components/checkbox";
import RadioButton from "../../../../../../../components/radio-button";

function FilterButton({
  children,
  title,
  selected,
  onClick,
  isRadio = false,
}: PropsWithChildren & {
  title: string;
  selected: boolean;
  onClick: () => void;
  isRadio?: boolean;
}) {
  return (
    <button className="filter-button" onClick={onClick}>
      {isRadio ? (
        <RadioButton state={selected} onClick={onClick} />
      ) : (
        <Checkbox state={selected} onClick={onClick} />
      )}
      {children}
      {title}
    </button>
  );
}

export default FilterButton;
