export function getContainerValues() {
  const containers = document.querySelector(".total_price");

  containers.forEach(function (container) {
    values.push(parseFloat(container.textContent));
  });
  console.log(values);
  let sum = 0;

  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);

  return sum;
}

export function updateCart() {
  price = num * parseFloat(productPrice[index].textContent);
  quantityNum[index].textContent = num;
  orderNum.textContent = `${num}x`;
  totalPrice.textContent = price;
  totalCartPrice.textContent = `$${getContainerValues()}`;
}
