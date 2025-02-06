import React, { useContext } from 'react'
import products from '../../product.json'
import { ProductContext } from './Context';

const Product = () => {
  const {CartItems,addToCart} = useContext(ProductContext)
  const groupedItem = [];
  for (let i = 0; i < products.length; i += 4) {
    groupedItem.push(products.slice(i, i + 4));
  }
  return (
   <>
   <div className="container my-5">
  <div
    className="text-center mx-auto wow fadeInUp"
    data-wow-delay="0.1s"
    style={{ maxWidth: 500 }}
  >
    <p className="fs-5 fw-bold text-primary">Our Offers</p>
    <h1 className="display-5 mb-5">Offers That We Provide For You</h1>
  </div>
  <h2 className="text-center mb-4">Value For Money - Up to 50% Off</h2>
  <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
    <div
      id="product-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {groupedItem.map((item3,index) => 
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`}
        key={index}>
          <div className="d-flex justify-content-center row g-3">
            {/* Card 1 */}
            {item3.map((item) =>
            <div className="col-md-3" key={item.id}>
            <div className="card">
              <div className="position-relative">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Product Image"
                />
                <span className="discount-badge">{item.discount}</span>
              </div>
              <div className="card-body">
                <h5 className="card-title price">
                ₹{item.offerPrice} <span className="original-price">₹{item.originalPrice}</span>
                </h5>
                <p className="card-text">
                  {item.name}
                </p>
                <p className="mb-1">
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" /> {item.reviewes}
                </p>
                <p className="text-muted">{item.offer}</p>
                <button className="btn add-to-cart-btn w-100" onClick={()=> addToCart(item)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>)}
          </div>
        </div>)}
        
        
        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#product-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#product-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Product