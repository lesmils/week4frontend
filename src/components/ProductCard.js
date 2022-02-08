import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { title, price, description, rating, id, mainImage } = props;
  return (
    <div style={{ border: "2px solid black", margin: 10, padding: 10 }}>
      <div>
        <div className="character-image">
          <img src={mainImage} alt="product" />
        </div>
        <h5>{title}</h5>
        <p>{price}.</p>
        <p>{description}</p>
        <p>{rating}</p>
        <Link to={`/details/${id}`}>
          <button>
            <p>details</p>
          </button>
        </Link>
        Go somewhere
      </div>
    </div>
  );
}
