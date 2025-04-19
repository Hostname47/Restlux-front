import MenuIcon from "../../../../../../../components/icons/MenuIcon";
import LineSquareTitle from "../../../../../../../components/line-square-title";
import MenuItem from "../menu-item";

type SpecialMenuProps = {
  title: string;
  special?: boolean;
  titleUnderline?: boolean;
};

function HomeMenuBox({
  title,
  special = false,
  titleUnderline = true,
}: SpecialMenuProps) {
  return (
    <div className={`menu-box ${special ? "special" : ""}`}>
      <LineSquareTitle title={title} width="100%" squareFilled />
      {!special && titleUnderline && (
        <div className="line-square-title">
          <div className="square"></div>
          <div className="line"></div>
          <div className="square"></div>
        </div>
      )}
      <div className="items">
        <MenuItem
          name="SPAGHETTI CARBONARA"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          price={19.99}
        />
        <MenuItem
          name="MARGERITHA PIZZA"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          price={19.99}
        />
        <MenuItem
          name="CHICKEN PARMESAN"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          price={54.99}
        />
      </div>
      <button className="open-button">
        <MenuIcon className="icon" />
        OPEN MENU
      </button>
    </div>
  );
}

export default HomeMenuBox;
