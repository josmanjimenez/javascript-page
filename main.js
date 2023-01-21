const email= document.querySelector(".navbar-right");
const menu=document.querySelector(".navbar-menu");
const mobile=document.querySelector(".menu");
const mobile_menu=document.querySelector(".mobile-menu");
const shopping_car=document.querySelector(".navbar-shopping-cart")
const menu_car=document.querySelector(".product-detail");
const secction=document.querySelector(".main-container")
const description=document.querySelector('.description-product');
const description_close=document.querySelector('.product-detail-close');
const products=[
    {
        "name":"bike",
        "image":"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "price":250,
    },
    {
        "name":"bike",
        "image":"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "price":250,
    },
    {
        "name":"bike",
        "image":"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "price":250,
    },
    {
        "name":"bike",
        "image":"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "price":250,
    },
    {
        "name":"bike",
        "image":"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "price":250,
    },
    {
        "name":"bike",
        "image":"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "price":250,
    },
    {
        "name":"bike",
        "image":"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "price":250,
    },
    {
        "name":"bike",
        "image":"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "price":250,
    },
    {
        "name":"bike",
        "image":"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "price":250,
    },
   
]

for(product of products){
const cards=document.querySelector(".cards-container")
cards.classList.add(".cards-container");
const product_card=document.createElement('div');
product_card.classList.add("product-card");

const img = document.createElement("img");
img.setAttribute("src", product.image);

const product_info=document.createElement("div");
product_info.classList.add("product-info");

const div=document.createElement("div");
const price=document.createElement("p");
price.innerHTML=`$ ${product.price}`;

const name=document.createElement("p");
name.innerHTML=product.name;

const figure=document.createElement("figure");
const img2=document.createElement("img");
img2.setAttribute("src","./icons/bt_add_to_cart.svg");
img2.setAttribute("alt","icon")

figure.appendChild(img2);

div.appendChild(price);
div.appendChild(name);

product_info.appendChild(div);
product_info.appendChild(figure);

product_card.appendChild(img);
product_card.appendChild(product_info);
cards.appendChild(product_card);
cards.addEventListener("click",toggle_description)
secction.appendChild(cards);

}
// <!-- <div class="cards-container">

// <div class="product-card">
//   <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//   <div class="product-info">
//     <div>
//       <p>$120,00</p>
//       <p>Bike</p>
//     </div>
//     <figure>
//       <img src="./javascript-page/icons/bt_add_to_cart.svg" alt="">
//     </figure>
//   </div>
// </div>


// </div> -->

email.addEventListener('click',toggle_inactive);
mobile.addEventListener('click',toggle_inactive_mobile);
shopping_car.addEventListener("click",toggle_shop);
description_close.addEventListener('click',toggle_close);

function toggle_close(){
    description.classList.toggle("inactive");
    // const mobileClosed=mobile_menu.classList.contains("inactive");
    // if(!mobileClosed){
    //     mobile_menu.classList.add("inactive")
    // }
}
function toggle_description(){
    description.classList.toggle("inactive");
    // const mobileClosed=mobile_menu.classList.contains("inactive");
    // if(!mobileClosed){
    //     mobile_menu.classList.add("inactive")
    // }
}

function toggle_shop(){
    menu_car.classList.toggle("inactive");
    const mobileClosed=mobile_menu.classList.contains("inactive");
    if(!mobileClosed){
        mobile_menu.classList.add("inactive")
    }
}
function toggle_inactive_mobile(){
    mobile_menu.classList.toggle("inactive");
    const shopClosed=menu_car.classList.contains("inactive");
    if(!shopClosed){
        menu_car.classList.add("inactive")
    }
}

function toggle_inactive(){
    menu.classList.toggle("inactive")
}



