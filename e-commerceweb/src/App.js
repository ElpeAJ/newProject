import "./App.css";

function Product(props) {
  return (
    <div className="products">
      <img src={props.link} alt={props.name} />
      <h1>{props.name}</h1>
      <h2>{props.cost}</h2>
    </div>
  );
}

export default Product;
