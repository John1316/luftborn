
export default function CardComponent({ product, currency }: CardProps) {
  return (
    <div className="card-container">
      <div className="card-color" style={{backgroundColor: product.color}}></div>
      <div className="card">
        <div className="card-header">
          <span className="card-category" title={product?.category}>{product?.category}</span>
          <span className="card-more">...</span>
        </div>
        <div className="card-content">
          <div className="card-amount" title={`${product?.price.toFixed(2)}${currency}`}>
            {product?.price.toFixed(2)}{currency}
          </div>
          <div className="grid grid-cols-md-12 items-center">
            <div className="col-md-9 col-xs-6">
              <p className="card-description" title={product.description}>{product.description}</p>
            </div>
            <div className="col-md-3">
              <div className="card-right">
                <p className="card-availability text-xs-center">InStore</p>
                <p className="card-availability text-xs-center">{product?.rating?.count}</p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
