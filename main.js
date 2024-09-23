document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addButton");
  const container = document.getElementById("container");
  let valuesArray = [];

  addButton.addEventListener("click", () => {
    const value = Math.floor(Math.random() * 100); // Generate a random value
    valuesArray.push(value);

    const item = document.createElement("div");
    item.className = "item";
    item.textContent = `Value: ${value}`;
    item.dataset.value = value;

    const hideButton = document.createElement("button");
    hideButton.textContent = "Hide";
    hideButton.addEventListener("click", () => {
      item.classList.add("hidden");
      const itemValue = parseInt(item.dataset.value, 10);
      valuesArray = valuesArray.filter((val) => val !== itemValue);
      console.log("Updated Array:", valuesArray);
    });

    item.appendChild(hideButton);
    container.appendChild(item);

    console.log("Current Array:", valuesArray);
  });
});
