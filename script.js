let cardItems = [
    {
       title: 'pink pair of sneakers',
       img: './images/img1.avif',
       price: 40,
       quantity: 2,
       size: 's',
       color: "pink",
       loved: true,
    },
    {
       title: 'orange pair of sneakers',
       img: './images/img2.avif',
       price: 45,
       quantity: 3,
       size: 'Xl',
       color: "orange",
       loved: false,
    },
    {
       title: 'orange pair of sneakers',
       img: './images/img3.jpg',
       price: 50,
       quantity: 4,
       size: 'L',
       color: "orange",
       loved: false,
    },
  ]
function htmlRender(data){
    return `<div class="singleCard shadow">
    <div>
      <img class="shadow" src=${data.img} alt="first">
      <div class="quantity">
        <button class="shadow-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
             </svg>
        </button>
        <input type="text" value="5">
        <button class="shadow-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 5l0 14"></path>
                <path d="M5 12l14 0"></path>
            </svg>
        </button>
      </div>
    </div>
    <div class="info">
        <h1>${data.title}</h1>
        <div>
            <div>
                <h6>price</h6>
                <span>${data.price}$</span>
            </div>
            <div>
                <h6>sub Total</h6>
                <span>${ data.quantity * data.price }$</span>
            </div>
            <div>
                <h6>size</h6>
                <span>${data.size}</span>
            </div>
            <div>
                <h6>choosen color</h6>
                <span class="color shadow-btn"></span>
            </div>
        </div>
    </div>
    <div class="col btn-hundler">
        <button class="heart shadow-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
             </svg>
        </button>
        <button class="delete shadow-btn">
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
</div>`;
}
const main = document.querySelector('main');
console.log(main)

cardItems.forEach(function(item, i){
    console.log(item.title, i)
    main.innerHTML += htmlRender(item);
    const color=document.querySelector('.color');
    color.style.backgroundColor = item.color;
})