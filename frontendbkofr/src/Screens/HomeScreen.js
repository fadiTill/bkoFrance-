
import data from'../data.js'

const HomeScreen = {
    render: () => {
        const { products } = data;
return `
<ul class="products">
${products.map(
  (product) =>`

<li>
        <div class="container">
            <div class="card">
              <div class="card-head">
                 
                <img src="images/transparent copy.png" alt="logo" class="card-logo">
                <img src="${product.image}" alt="${product.category}" class="product-img">
           
                <div class="product-detail">
                
                </div>
                <span class="back-text">
                        BKO
                        Fashion
                      </span>
              </div>
              <div class="card-body">
                <div class="product-desc">
                  <span class="product-title">
                    <a href="/#/product/${product.id}">${product.title}</a>
                          <span class="badge">
                           
                          </span>
                  </span>
                  <span class="product-caption">
                    100%  Organic 
                  </span>
                  <span class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star grey"></i>
                        </span>
                        <div class="prix">
                           $${product.price}
                        </div>
                </div>
                <div class="product-properties">
                  <span class="product-size">
                          <h4>Size</h4>
                          <ul class="ul-size">
                            <li><a href="#">7</a></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#">9</a></li>
                            <li><a href="#" class="active">10</a></li>
                            <li><a href="#">11</a></li>
                          </ul>
                        </span>
                  <span class="product-color">
                          <h4>${product.color}</h4> 
                         
                          
                        </span>
                       
                  <span class="product-price">
                    <b>Acheter</b>
                        </span>
                </div>
              </div>
            </div>
          </div>
          
</li>
`
)}
`;
    },
};
export default HomeScreen;