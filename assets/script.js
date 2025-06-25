document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addButton').addEventListener('click', addItem);
    loadItems();
  });

    const input = document.getElementById("itemInput");
    const button = document.getElementById("addButton");


    // User can hit enter instead of having to click on addButton everytime
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        button.click();
      }
    });
  
  function addItem() {
    const input = document.getElementById('itemInput');
    const newItem = input.value.trim();
  
    if (newItem === '') return;
  
    // Add to DOM
    const li = document.createElement('li');
    li.textContent = newItem;
    document.getElementById('itemList').appendChild(li);
  
    // Save to localStorage
    saveToLocalStorage(newItem);
  
    input.value = '';
  }
  
  function saveToLocalStorage(item) {
    let items = JSON.parse(localStorage.getItem('myItems')) || [];
    items.push(item);
    localStorage.setItem('myItems', JSON.stringify(items));
  }
  
  function loadItems() {
    const items = JSON.parse(localStorage.getItem('myItems')) || [];
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      document.getElementById('itemList').appendChild(li);
    });
  }