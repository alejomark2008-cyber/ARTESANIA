
const params = new URLSearchParams(location.search);
const section = params.get("section") === "souvenirs" ? "souvenirs" : "artesanias";
const title = document.getElementById("catalogTitle");
const intro = document.getElementById("catalogIntro");
const filters = document.getElementById("filters");
const grid = document.getElementById("productGrid");
const count = document.getElementById("resultCount");
const search = document.getElementById("searchInput");
const pagination = document.getElementById("pagination");

const config = {
  artesanias:{
    title:"Artesanías para el hogar",
    intro:"Piezas hechas a mano con madera natural. Explora cucharas, palas, tablas, tenedores, morteros y otros utensilios.",
    
cats:[["todos","Todos"],["portavasos","Portavasos"],["porta-telefonos","Porta teléfonos"],["imanes","Imanes"],["llaveros","Llaveros"],["otros","Otros"]]
  souvenirs:{
    title:"Souvenirs de Colombia",
    intro:"Recuerdos artesanales inspirados en Colombia, ideales para regalar, coleccionar o llevar un pedacito de nuestra tierra.",
    
cats:[["todos","Todos"],["portavasos","Portavasos"],["porta-telefonos","Porta teléfonos"],["imanes","Imanes"],["llaveros","Llaveros"],["otros","Otros"]]
}[section];

title.textContent=config.title; intro.textContent=config.intro;
let active="todos", page=1, perPage=12;

function drawFilters(){
  filters.innerHTML=config.cats.map(([id,label])=>`<button class="filter-btn ${active===id?"active":""}" data-cat="${id}">${label}</button>`).join("");
}
function getItems(){
  const q=(search.value||"").trim().toLowerCase();
  return PRODUCTS.filter(p=>p.section===section && (active==="todos"||p.category===active) &&
    (!q || (p.name+" "+p.description).toLowerCase().includes(q)));
}
function render(){
  const items=getItems(); const pages=Math.max(1,Math.ceil(items.length/perPage));
  page=Math.min(page,pages);
  const start=(page-1)*perPage;
  grid.innerHTML=items.slice(start,start+perPage).map(productCard).join("");
  count.textContent=`${items.length} producto${items.length===1?"":"s"}`;
  pagination.innerHTML=Array.from({length:pages},(_,i)=>`<button class="page-btn ${page===i+1?"active":""}" data-page="${i+1}">${i+1}</button>`).join("");
}
filters.addEventListener("click",e=>{
  const btn=e.target.closest("[data-cat]"); if(!btn)return;
  active=btn.dataset.cat; page=1; drawFilters(); render();
});
pagination.addEventListener("click",e=>{
  const btn=e.target.closest("[data-page]"); if(!btn)return;
  page=Number(btn.dataset.page); render(); window.scrollTo({top:420,behavior:"smooth"});
});
search.addEventListener("input",()=>{page=1;render()});
drawFilters(); render();
