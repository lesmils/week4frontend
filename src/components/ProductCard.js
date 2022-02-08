import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { title, price, description, rating, id, mainImage } = props;
  return (
    <div>
      <div>
        <div>
          <img src={mainImage} alt="product" />
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
    </div>
  );
}
