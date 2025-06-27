document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addButton').addEventListener('click', addItem);
    loadItems();
  });

    const input = document.getElementById("itemInput");
    const ratingInput = document.getElementById("ratingInput");
    const button = document.getElementById("addButton");


    // User can hit enter instead of having to click on addButton everytime
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        button.click();
      }
    });
  
  function addItem() {
    const itemValue = input.value.trim();
    const ratingValue = ratingInput.value;
  
    if (itemValue === '') return;

    const stars = '⭐'.repeat(ratingValue);
  
    // Add to DOM
    const li = document.createElement('li');
    li.textContent = `${itemValue}  ${stars}`;
    document.getElementById('itemList').appendChild(li);
  
    // Save to localStorage
     saveToLocalStorage(itemValue, ratingValue);
  
    input.value = '';
  }
  
  function saveToLocalStorage(item, rating) {
    let items = JSON.parse(localStorage.getItem('myItems')) || [];
    items.push({ name: item, rating: rating })
    localStorage.setItem('myItems', JSON.stringify(items));
  }
  
 function loadItems() {
  const items = JSON.parse(localStorage.getItem('myItems')) || [];
  items.forEach(function(entry) {
    const stars = '⭐'.repeat(entry.rating);
    const li = document.createElement('li');
    li.textContent = `${entry.name}  ${stars}`;
    document.getElementById('itemList').appendChild(li);
  });
  }