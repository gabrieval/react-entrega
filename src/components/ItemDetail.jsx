import ItemCount from "./ItemCount";

const ItemDetail = ({ product, onAddToCart }) => {
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail">
      <div className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <p className="stock">Stock disponible: {product.stock}</p>
          
          <ItemCount stock={product.stock} onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
