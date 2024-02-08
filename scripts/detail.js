const arama = window.location.search;

const params = new URLSearchParams(arama);

const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("../db.json");
  const data = await res.json();

  const product = data.menu.find((item) => item.id == paramId);

  renderPage(product);
});

const outlet = document.getElementById("outlet");
function renderPage(product) {
    console.log(product)
  outlet.innerHTML = `
  <div class="d-flex justify-content-between fs-5">
  <a href="index.htm">
      <img width="40px" src="/images/home.png" alt="">
  </a>
  <p>anasayfa / ${product.category} /${product.title.toLowerCase()}</p>
</div>


<h1 class="text-center my-3">${product.title}</h1>

<img src=${product.img} 
class="rounded object-fit-cover shadow"
alt="">
<h3 class="mt-4">
  <span>Ürün Kategorisi</span>
  <span class="text-success">${product.category}</span>
</h3>
<h3 class="mt-4">
  <span>Ürün Fiyatı</span>
  <span class="text-success">${(product.price*33).toFixed(2)}</span>
</h3>
<p class="lead">
${product.desc}
</p>`;
}
