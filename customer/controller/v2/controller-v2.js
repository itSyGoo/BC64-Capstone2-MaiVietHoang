export let renderProductList = (productArr) => {
  console.log("🚀 ~ renderProductList ~ productArr:", productArr);
  let contentHtml = "";
  productArr.reverse().forEach((product) => {
    let divString = `
    <div class="product-item">
      <img src="${product.img}" alt="${product.name}" class="product-image">
      <div class="item-text">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
      </div>
      <div class="rate">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <p class="product-screen">${product.screen}</p>
      <p class="product-backCamera">${product.backCamera}</p>
      <p class="product-frontCamera">${product.frontCamera}</p>
      <p class="product-desc">${product.desc}</p>
      <button class="add-to-cart" data-id="${product.id}"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>
    </div>
    `;
    contentHtml += divString;
  });
  document.getElementById("product-list").innerHTML = contentHtml;
};




