const main = document.querySelector('main');

  const innerHtml = (data) => {
    return `<div class="single-card">
  <div>
      <img src=${data.img} alt=${data.title}>
      <div class="quantity-handler">
       <button class="dec">-</button>
       <input type="text" value=${data.quantity}>
       <button class="inc">+</button>
      </div>
  </div>
  <div>
      <h1>Pink pair of sneakers</h1>
      <div class="info">
          <div>
              <h3>price</h3>
              <span>${data.price}$</span>
          </div>
          <div>
              <h3>Sub total</h3>
              <span>${ data.price * data.quantity }$</span>
          </div>
          <div>
              <h3>size</h3>
              <span>${data.size}</span>
          </div>
          <div>
              <h3>choosen color</h3>
              <span>pink</span>
          </div>

      </div>
  </div>
  <div class="manage-btn col">
      <button class="heart">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
           </svg>
      </button>
      <button class="delete">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7l16 0"></path>
              <path d="M10 11l0 6"></path>
              <path d="M14 11l0 6"></path>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
           </svg>
      </button>
  </div>
</div>`};

function render(){
    cardItems.forEach(function(item){
        main.innerHTML += innerHtml(item)
     })
}
render();
const total = document.getElementById('total');
let quantity = 0;

const hearts = document.querySelectorAll('.heart');
console.log(hearts)

hearts.forEach(function(heart, index){
    heart.addEventListener('click', function(e){
        e.preventDefault();
        console.log(e.target)
        e.target.classList.toggle('loved')
    })
})


const deleteCards = document.querySelectorAll('.delete');
const singleCard = document.querySelectorAll('.single-card')
deleteCards.forEach(function(item, index){
    item.addEventListener('click', function(e){
        e.preventDefault();
        singleCard[index].style.display="none";

    })
})
