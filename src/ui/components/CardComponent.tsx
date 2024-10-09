
export default function CardComponent({ product, currency }: CardProps) {
  return (
    <div className="sales-dashboard__card">
    <div className="sales-dashboard__card-header">
      <span className="sales-dashboard__card-category">{product?.category}</span>
      <span className="sales-dashboard__card-more">...</span>
    </div>
    <div className="sales-dashboard__card-amount">
      {product?.price.toFixed(2)}{currency}
    </div>
    <div className="grid">
        <p className="col-md-8 sales-dashboard__card-description">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <p className="col-md-4 sales-dashboard__card-availability">In Store</p>
    </div>
  </div>
  )
}
