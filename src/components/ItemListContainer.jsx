function ItemListContainer({ greeting }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className="alert alert-info" role="alert">
            <h2 className="alert-heading">{greeting}</h2>
            <p>
              Bienvenido a nuestro catálogo de productos. Aquí encontrarás las mejores opciones con los mejores precios.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <p className="text-muted">El catálogo de productos aparecerá aquí pronto...</p>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
