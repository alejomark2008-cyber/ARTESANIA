const WHATSAPPS = [
  { label: "313 256 6201", number: "573132566201" },
  { label: "315 537 2954", number: "573155372954" }
];

function money(v){
  if (v === null || v === undefined || v === "") {
    return "";
  }

  return "#" + String(v);
}

function whatsappUrl(product, qty = 1, number = WHATSAPPS[0].number){
  const mode = qty >= 24 ? "precio mayorista" : "precio al detal";

  const text = `Hola, estoy interesado en ${product.name}. Cantidad: ${qty} unidades. Solicito información sobre el ${mode}.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

function productCard(product){
  return `
  <article class="product-card">

    <a href="producto.html?id=${encodeURIComponent(product.id)}">
      <div class="product-image">
        <img
          src="${product.images[0]}"
          alt="${product.name}"
          loading="lazy"
        >
      </div>
    </a>

    <div class="product-body">

      <h3>${product.name}</h3>

      <p>${product.description}</p>

      <div class="price-row">

        <div class="price-box">
          <span>Código al detal</span>
          <strong>${money(product.retail)}</strong>
        </div>

        <div class="price-box">
          <span>Código al mayor</span>
          <strong>${money(product.wholesale)}</strong>
        </div>

      </div>

      <div class="wholesale-note">
        Precio mayorista disponible a partir de 24 unidades.
      </div>

      <div class="quantity" data-id="${product.id}">
        <button type="button" data-action="minus">−</button>
        <span>1</span>
        <button type="button" data-action="plus">+</button>
      </div>

      <div class="card-actions">

        <a
          class="outline-btn"
          href="producto.html?id=${encodeURIComponent(product.id)}"
        >
          VER PRODUCTO
        </a>

        <a
          class="outline-btn"
          data-wa="${product.id}"
          href="${whatsappUrl(product, 1)}"
          target="_blank"
          rel="noopener"
        >
          CONSULTAR POR WHATSAPP
        </a>

      </div>

    </div>

  </article>`;
}

document.addEventListener("click", e => {

  const q = e.target.closest(".quantity");

  if(!q) return;

  const id = q.dataset.id;

  const product = PRODUCTS.find(p => p.id === id);

  if(!product) return;

  const span = q.querySelector("span");

  let qty = Math.max(
    1,
    Number(span.textContent) +
    (
      e.target.dataset.action === "plus"
        ? 1
        : e.target.dataset.action === "minus"
          ? -1
          : 0
    )
  );

  span.textContent = qty;

  const wa = q.parentElement.querySelector(`[data-wa="${id}"]`);

  if(wa){
    wa.href = whatsappUrl(product, qty);
  }

});
