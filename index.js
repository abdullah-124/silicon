const change =(img) =>{
    document.getElementById('banner-img').src = img;
}
const productsContainer = document.getElementById('product-container');
const loadMore = () =>{
    fetch('./product.json')
    .then(res => res.json())
    .then(data => showCard(data))
}
const showCard = (data)=>{
    data.map(card=>{
        productsContainer.innerHTML+=`
        <div class="col-lg-3 col-12">
        <div class="p-card">
          <img
            class="img-fluid"
            src=${card.img}
            alt=""
          />
          <h5>${card.name}</h5>
          
          <div class="d-flex justify-content-between align-items-center">
            <h6>$ ${card.price}</h6>
            <button class="btn-silicon-outline">Buy</button>
          </div>
        </div>
      </div>
        `
    })
}
loadMore();