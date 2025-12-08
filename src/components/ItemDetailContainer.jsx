import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../data/products";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProductById(itemId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    alert(`Se agregaron ${quantity} unidad(es) de "${product.name}" al carrito`);
  };

  if (loading) {
    return <div className="item-detail-container"><p>Cargando producto...</p></div>;
  }

  if (error) {
    return <div className="item-detail-container"><p>Error: {error}</p></div>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ItemDetailContainer;
