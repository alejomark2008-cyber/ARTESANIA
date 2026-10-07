
const params = new URLSearchParams(location.search);
const id=params.get("id");
const product=PRODUCTS.find(p=>p.id===id);
const root=document.getElementById("productDetail");
if(!product){
  root.innerHTML=`<div class="not-found"><h1>Producto no encontrado</h1><p>Regresa al catálogo para continuar.</p></div>`;
}else{
  let qty=1;
  root.innerHTML=`
  <div class="product-detail">
    <section>
      <div class="gallery-main"><img id="mainImg" src="${product.images[0]}" alt="${product.name}"></div>
      <div class="thumbs">
        ${product.images.map((im,i)=>`<button class="thumb ${i===0?"active":""}" data-img="${im}"><img src="${im}" alt=""></button>`).join("")}
        ${product.measure?`<button class="thumb" data-img="${product.measure}"><img src="${product.measure}" alt="Medidas"></button>`:""}
      </div>
    </section>
    <section class="product-info">
      <span class="eyebrow">${product.section==="souvenirs"?"SOUVENIR":"ARTESANÍA PARA EL HOGAR"}</span>
      <h1>${product.name}</h1>
      <p class="desc">${product.description}</p>
      <div class="detail-meta">
        <strong>${product.dimensions ? "Medidas: " + product.dimensions : "Souvenir sin medidas"}</strong>
      </div>
      <div class="product-price-large">
        <div class="large-price"><span>CÓDIGO AL DETAL</span><strong id="retail">${money(product.retail)}</strong></div>
        <div class="large-price wholesale"><span>CÓDIGO AL MAYOR</span><strong id="wholesale">${money(product.wholesale)}</strong></div>
      </div>
      <div class="detail-quantity">
        <span>Cantidad</span>
        <div class="quantity"><button id="minus">−</button><span id="qty">1</span><button id="plus">+</button></div>
      </div>
      <div class="dynamic-note" id="dynamicNote">A partir de 24 unidades, el precio disminuye al precio mayorista.</div>
      <div class="whatsapp-actions">
        <a class="whatsapp-btn" id="wa1" href="${whatsappUrl(product,1,WHATSAPPS[0].number)}" target="_blank" rel="noopener">WHATSAPP · 313 256 6201</a>
        <a class="whatsapp-btn whatsapp-btn-secondary" id="wa2" href="${whatsappUrl(product,1,WHATSAPPS[1].number)}" target="_blank" rel="noopener">WHATSAPP · 315 537 2954</a>
      </div>
      ${product.measure?`<div class="measure-box"><h3>Medidas del producto</h3><img src="${product.measure}" alt="Imagen de medidas de ${product.name}"></div>`:""}
    </section>
  </div>`;
  const main=document.getElementById("mainImg");
  document.querySelectorAll(".thumb").forEach(t=>t.addEventListener("click",()=>{
    main.src=t.dataset.img; document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active")); t.classList.add("active");
  }));
  function update(){
    document.getElementById("qty").textContent=qty;
    document.getElementById("dynamicNote").textContent=qty>=24
      ? "✓ Precio mayorista aplicado a partir de 24 unidades."
      : "A partir de 24 unidades, el precio disminuye al precio mayorista.";
    document.getElementById("wa1").href=whatsappUrl(product,qty,WHATSAPPS[0].number);
    document.getElementById("wa2").href=whatsappUrl(product,qty,WHATSAPPS[1].number);
  }
  document.getElementById("plus").onclick=()=>{qty++;update()};
  document.getElementById("minus").onclick=()=>{qty=Math.max(1,qty-1);update()};
}
