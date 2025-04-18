import "./styles.css";

function MenuItem({
  name,
  price,
  desc,
}: {
  name: string;
  price: number;
  desc: string;
}) {
  return (
    <div className="menu-item">
      <div className="name-and-price">
        <b className="name">{name}</b>
        <div className="line-between"></div>
        <b className="price">{price}</b>
      </div>
      <p className="desc">{desc}</p>
    </div>
  );
}

export default MenuItem;
