const productList = [
    { id: 1, name: "Strawberry", price: 50, img: "strawberry.png" },
    { id: 2, name: "Guava", price: 70, img: "guava.png" },
    {
        id: 3,
        name: "Washington Apple",
        price: 120,
        img: "washington-apple.png",
    },
    { id: 4, name: "Royal Gala", price: 100, img: "royal-gala.png" },
    {
        id: 5,
        name: "Red Delicious",
        price: 90,
        img: "red-delicious.png",
    },
    {
        id: 6,
        name: "Dragon fruit",
        price: 50,
        img: "dragon-fruit.png",
    },
    { id: 7, name: "Peach", price: 100, img: "peach.png" },
    { id: 8, name: "Kiwi", price: 160, img: "kiwi.png" },
];

const cartData = JSON.parse(sessionStorage.getItem("cart"));

const countMap = cartData.reduce((map, item) => {
    map[item.id] = item.count;
    return map;
  }, {});
  
  const mergedList = productList.filter((product) => countMap.hasOwnProperty(product.id));
  
  mergedList.forEach((product) => {
    product.count = countMap[product.id];
  });


const container = document.getElementById("table-container");
console.log(mergedList);
let subtotal =0;

mergedList.forEach((element) => {
    const div = document.createElement("tr");
    div.innerHTML = `
            <td>
            <div class="cart-info">
                <img src="${element.img}" />
                <div>
                <p style="font-size: 18px">
                    <b>${element.name}</b>
                    <small style="font-size: 18px">Rs. ${element.price}</small>
                </p>
                </div>
            </div>
            </td>
            <td><input type="number" value="${element.count}" style="font-size: 18px" disabled/></td>
            <td style="font-size: 18px">Rs. ${element.count * element.price}</td>
    `;
    subtotal += element.price*element.count
    container.appendChild(div);
});

document.getElementById("subtotal").innerText = "Rs. "+subtotal
document.getElementById("tax").innerText = "Rs. "+subtotal*0.05
document.getElementById("total").innerText = "Rs. "+(subtotal*0.05+subtotal)

