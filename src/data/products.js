const API_URL = "https://fakestoreapi.com";

export const getProducts = (categoryId) => {
  const url = categoryId
    ? `${API_URL}/products/category/${categoryId}`
    : `${API_URL}/products`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al obtener productos");
      }
      return response.json();
    })
    .then(data => {
      // Mapear datos de FakeStore para asegurar consistencia
      return data.map(product => ({
        id: product.id,
        name: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
        stock: Math.floor(Math.random() * 50) + 10 // Stock aleatorio 10-60
      }));
    });
};

export const getProductById = (productId) => {
  return fetch(`${API_URL}/products/${productId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Producto no encontrado");
      }
      return response.json();
    })
    .then(product => ({
      id: product.id,
      name: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
      stock: Math.floor(Math.random() * 50) + 10 // Stock aleatorio 10-60
    }))
    .catch(() => {
      throw new Error("Producto no encontrado");
    });
};

export const getCategories = () => {
  return fetch(`${API_URL}/products/categories`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al obtener categorías");
      }
      return response.json();
    });
};
