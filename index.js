const change = (img) => {
  const imgbx = document.getElementById("banner-img");
  imgbx.src = img;
  imgbx.classList.add("bounce");
  setTimeout(() => {
    imgbx.classList.remove("bounce");
  }, 1200);
};
const productsContainer = document.getElementById("product-container");
const loadMore = () => {
  fetch("./product.json")
    .then((res) => res.json())
    .then((data) => {
      showCard(data);
    });
};
const showCard = (data) => {
  productsContainer.innerHTML = data
    .map((card, index) => {
      if (index < 4)
        return `
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
        <button onclick="addToCart(${card.id})" class="btn-silicon-outline">Buy</button>
      </div>
    </div>
  </div>
    `;
    })
    .join("");
};
loadMore();

const showBlogs = (blogs) => {
  const blogsContainer = document.getElementById("blog-container");
  for (let i = 0; i < 4; i++) {
    let ind = Math.floor(Math.random() * 10);
    const { name, blogImg, authorName, authorImg, keyword, postViews,postTime } =
      blogs[ind];
    blogsContainer.innerHTML += `
    <div class="col mx-auto my-3 ">
          <div class="card-blog">
            <img class="card_img img-fluid" src=${blogImg} alt="" />
            <article class="p-2">
              <div class="keyword my-2">
                ${keyword.map(k => `<a class="btn-k">${k}</a>`).join("")}
              </div>
              <h5 class="fw-bolder">${name}</h5>
            </article>
            <div class="p-2  d-flex justify-content-between align-items-center">
              <div class="author d-flex align-items-center">
                <img class="img-fluid" src="${authorImg}" alt="" />
                <div class="ms-1">
                  <h6>${authorName}</h6>
                  <p>${postTime} ago</p>
                </div>
              </div>
              <div class="view">
                <img src="img/view.png" alt="">
                <p>${postViews}</p>
              </div>
            </div>
          </div>
        </div>
    `;
  }
};

function loadBlogs() {
  fetch("./blogs.json")
    .then((res) => res.json())
    .then((data) => showBlogs(data));
}
loadBlogs();