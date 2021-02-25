// References
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// Functions
button.onclick = function() {
  // Return the value of input element
  let myItem = input.value;
  input.value = '';

  // Create li, span, and button new elements
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  // Append the span and the button as children of the list item.
  listItem.appendChild(listText);
  // Set the text content of the span
  listText.textContent = myItem;

  listItem.appendChild(listBtn);
  // Set the text content of the button to 'Delete'
  listBtn.textContent = 'Delete';
  
  // Append the list item as a child of the list.
  list.appendChild(listItem);

  // Delete the entire list item it is inside
  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  }

  // Ready for entering the next shopping list item
  input.focus();

}