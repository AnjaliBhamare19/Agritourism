let flag = 0;

function controller(x){
    flag = flag +x;
    slideshow(flag);
    // console.log(flag);
}

slideshow(flag);
    setInterval(()=>{
        controller(1)
    },1000)


function slideshow(n)
{
    let slides = document.getElementsByClassName('slide');
    // console.log(slides.length);
    if(n == slides.length){
        flag =0;
        n=0;
    }
    if(n < 0){
        flag = slides.length-1;
        n = slides.length-1;
    }
    for(let y of slides)
    {
        y.style.display ="none";
    }
    slides[n].style.display = "block";
}

function increamentCounter(event) {
    console.log(event);
    const count = event.previousElementSibling;
    count.innerText = parseInt(count.innerText)+1
    console.log(count);
}

function decreamentCounter(event) {
    console.log(event);
    const count = event.nextElementSibling;
    count.innerText = parseInt(count.innerText)-1 != 0?parseInt(count.innerText)-1:count.innerText;
    console.log(count);
}


//add to cart
const productList = [
    { id: 1, name: "Strawberry", price: 20, img: "strawberry.png" },
    { id: 2, name: "Guava", price: 20, img: "guava.png" },
    {
        id: 3,
        name: "Washington Apple",
        price: 20,
        img: "washington-apple.png",
    },
    { id: 4, name: "Royal Gala", price: 20, img: "royal-gala.png" },
    {
        id: 5,
        name: "Red Delicious",
        price: 20,
        img: "red-delicious.png",
    },
    {
        id: 6,
        name: "Dragon fruit",
        price: 20,
        img: "dragon-fruit.png",
    },
    { id: 7, name: "Peach", price: 20, img: "peach.png" },
    { id: 8, name: "Kiwi", price: 20, img: "kiwi.png" },
];
const myCart = [];
const container = document.getElementById("container");
const cartCount = document.getElementById("card-count");
cartCount.style.display='none'
productList.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("pr-div");
    div.innerHTML = `<div> 
            <img src="${element.img}" loading="lazy" alt="" class="pr-img _250px" id="8" /> 
        </div>
            <h1 class="pr-heading">Peach <span style="font-size: 18px; color: #db1212;"> Rs.${element.price}/kg </span> </h1>
        <div class="con-div">
            <div class="c-control">
                <button class="btn-c" onclick="decrementCounter(this)">-</button>
                <div class="count-box">1</div> 
                <button class="btn-c" onclick="incrementCounter(this)">+</button>
            </div>
            <div class="b-controls"> 
                <button class="btn-b" onclick="addCart(${element.id},this)"> <img src="/img/cart.svg" alt=""> Cart</button>
                <button class="btn-b">Buy Now</button> 
            </div>
        </div>`;
    container.appendChild(div);
});

function addCart(id, element) {
    const count = element.parentElement.previousElementSibling.childNodes[3].innerText
    cartCount.style.display = 'flex'
    if(myCart.findIndex((item) => item.id == id)<0){
        myCart.push({ "id": id, 'count': Number(count) });
        cartCount.innerText = myCart.length}
    else{
        myCart[myCart.findIndex((item) => item.id == id)].count = Number(count);
        console.log('update');
    }
    console.log(myCart);
}

function handelCart() {
    if (myCart.length!==0) {
        sessionStorage.setItem("cart", JSON.stringify(myCart));
    window.location = "cart.html";
    }
    else{
        alert('Cart is empty')
    }
}

