import Stars from "../stars";

function StarButton({
  count,
  onClick,
}: {
  count: number;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button className="filter-button" onClick={onClick}>
      <Stars count={count} />
    </button>
  );
}

export default StarButton;
