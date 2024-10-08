import { getContainerValues, updateCart } from "./functions";

const addToCartBtn = document.querySelectorAll(".add_to_cart");
const orderCon = document.querySelector(".order_con");
const emptyCon = document.querySelector(".empty_con");
const productName = document.querySelectorAll(".name");
const productPrice = document.querySelectorAll(".price_num");
const imgCon = document.querySelectorAll(".img_con");
const quantityCon = document.querySelectorAll(".quantity_con");
const decrementCon = document.querySelectorAll(".decrement_con");
const incrementCon = document.querySelectorAll(".increment_con");
const quantityNum = document.querySelectorAll(".num_of_quantity");
const totalCartPrice = document.querySelector("#total_cart_price");
const orderPlacementCon = document.querySelector(".order_placement");
const quantity = document.querySelector("#quantity");

let orderBoxes = [];
let cartItem = 0;

/* Add to cart */
addToCartBtn.forEach(function (addToCart, index) {
  addToCart.addEventListener("click", function () {
    // orderPlacementChild++;
    // const isContain = addToCart.getAttribute("class");

    emptyCon.style.display = "none";
    orderCon.style.display = "block";
    imgCon[index].style.border = "3px solid #c73b10ff";
    quantityCon[index].style.display = "flex";
    addToCart.style.display = "none";

    /* ORDER PLACEMENT */
    const order = document.createElement("div");
    order.className = "order";
    orderPlacementCon.appendChild(order);

    const namePriceCon = document.createElement("div");
    namePriceCon.className = "name_price";
    order.appendChild(namePriceCon);

    const placement = document.createElement("div");
    namePriceCon.appendChild(placement);

    // Name of product
    const orderName = document.createElement("p");
    orderName.className = "order_name";
    placement.appendChild(orderName);

    // Numbers of products
    const orderNum = document.createElement("span");
    orderNum.className = "order_num";
    placement.appendChild(orderNum);

    // Price of Product
    const orderPrice = document.createElement("span");
    orderPrice.className = "order_price";
    placement.appendChild(orderPrice);

    // Total Price of selected product
    const totalPrice = document.createElement("span");
    totalPrice.className = "total_price";
    placement.appendChild(totalPrice);

    // const dollarSignPrice = document.createElement("span");
    // dollarSignPrice.className = "dollar_price";
    // dollarSignPrice.appendChild(totalPrice);
    // console.log(dollarSignPrice);

    // Remove Button
    const removeBtn = document.createElement("div");
    removeBtn.className = "remove";
    namePriceCon.appendChild(removeBtn);

    // Create the SVG element
    const svg = document.createElement("svg");
    svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path fill="#CAAFA7"
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z">
                  </path>
                </svg>`;

    // Append the SVG to the container
    removeBtn.appendChild(svg);

    const hr = document.createElement("hr");
    order.appendChild(hr);

    /************ Increment and Decrement Button ***********/
    let num = 1;
    cartItem++;
    let price = parseFloat(productPrice[index].textContent);
    const values = [];

    // console.log(
    //   price.toLocaleString("en-us", {
    //     currency: "USD",
    //     style: "currency",
    //   })
    // );

    orderNum.textContent = `${num}x`;
    orderName.textContent = productName[index].textContent;
    orderPrice.textContent = `@ $${productPrice[index].textContent}`;
    totalPrice.textContent = price;
    totalCartPrice.textContent = `$${price}`;
    quantity.textContent = cartItem;
    quantityNum[index].textContent = num;

    console.log(getContainerValues(), updateCart());

    function decrement() {
      if (num > 1) {
        num--;
        updateCart();
      } else if (num === 1) {
        quantityCon[index].style.display = "none";
        addToCart.style.display = "flex";
        imgCon[index].style.border = "none";
        order.style.display = "none";
        quantity.textContent = cartItem;
        // totalCartPrice.textContent = `$${minusValue()}`;
      }
    }

    function increment() {
      num++;
      updateCart();
    }

    decrementCon[index].addEventListener("click", decrement);
    incrementCon[index].addEventListener("click", increment);

    if (cartItem > 1) {
      totalCartPrice.textContent = `$${getContainerValues()}`;
    }

    // Remove Button
    removeBtn.addEventListener("click", function () {
      cartItem--;
      quantityCon[index].style.display = "none";
      order.style.display = "none";
      addToCart.style.display = "flex";
      imgCon[index].style.border = "none";
      totalCartPrice.textContent = `$${0}`;
      quantity.textContent = cartItem;
      console.log(cartItem);

      if (cartItem === 0) {
        orderCon.style.display = "none";
        emptyCon.style.display = "block";
      }
    });
  });
});

// let indexToRemove = values.findIndex((value) => value === 6.5); // Find index of value 3

// if (indexToRemove !== -1) {
//   values.splice(indexToRemove, 1); // Remove 1 element at the found index
// }

// console.log(values);
