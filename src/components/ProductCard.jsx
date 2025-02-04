const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img className="product-img" src={image} alt={title} />
      <div>{title}</div>
    </div>
  );
};

export default ProductCard;
