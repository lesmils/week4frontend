import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { title, price, description, rating, id, mainImage } = props;
  return (
    <div className="product-card">
      <div className="product-container">
        <img className="productjpg" src={mainImage} alt="product" />
      </div>
      <div className="details-container">
        <h5 style={{ color: "#00584E" }}>{title}</h5>
        <p>€ {price}</p>
        <p>{description}</p>
        <p>&#x2605; {rating}</p>
        {!props.hideButton && (
          <Link to={`/details/${id}`}>
            <button>
              <p>details</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
