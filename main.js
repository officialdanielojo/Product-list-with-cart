export function checkEmptyCart(selectedProduct, emptyCon) {
  if (selectedProduct.length === 0) {
    emptyCon.style.display = "block";
  } else {
    emptyCon.style.display = "none";
  }
}

export function displayProductsSelected(selectedProduct, orderPlacementCon) {
  const display = selectedProduct.map(function (each) {
    return `<div class="selected_product">
      <div>
        <h4>${each.name}</h4>
      <div style="display: flex; align-items: center; gap: 12px">
      <span>${each.amount}x</span>
      <p>@ $${each.price}</p>
      <p>$${each.price}</p>
      </div>
      </div>
      
      <div class="remove_product">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
      </div>
    </div>`;
  });

  const joinedDisplay = display.join("");
  // console.log(joinedDisplay);
  orderPlacementCon.innerHTML = joinedDisplay;
}
