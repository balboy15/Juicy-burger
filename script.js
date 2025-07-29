const products = [
  {id:1,name:'Burger Juicy',price:25000,img:'https://picsum.photos/200?burger'},
  {id:2,name:'Cheese Burger',price:28000,img:'https://picsum.photos/200?cheese'},
  {id:3,name:'Fries Medium',price:12000,img:'https://picsum.photos/200?fries'},
  {id:4,name:'Coke Float',price:9000,img:'https://picsum.photos/200?drink'}
];

let cart=[];

const render = () => {
  const list=document.getElementById('productList');
  list.innerHTML = products.map(p=>`
    <div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <div class="price">Rp ${p.price.toLocaleString()}</div>
      <button class="addBtn" onclick="add(${p.id})">+ Keranjang</button>
    </div>
  `).join('');
};

const add = id => {
  cart.push(products.find(p=>p.id===id));
  document.getElementById('cartCount').innerText = cart.length;
  const total = cart.reduce((a,b)=>a+b.price,0);
  document.getElementById('totalPrice').innerText = `Rp ${total.toLocaleString()}`;
  document.getElementById('goCheckout').disabled = false;
};

document.getElementById('goCheckout').addEventListener('click',()=>{
  localStorage.setItem('cart',JSON.stringify(cart));
  location.href='checkout.html';
});

render();
