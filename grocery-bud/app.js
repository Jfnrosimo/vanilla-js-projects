// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const groceryContainer = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** FUNCTIONS **********
const addItem = (e) => {
  e.preventDefault();
  const value = grocery.value;
  console.log(grocery.value);
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement("article");

    //Add class
    element.classList.add("grocery-item");

    //Add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
      <p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;

    //Append child
    list.appendChild(element);

    //Display alert
    displayAlert("item added to the list", "success");

    //Show container
    groceryContainer.classList.add("show-container");

    //Add to local storage
    addToLocalStorage(id, value);

    //Set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert("please enter value", "danger");
  }
};

//Display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //Remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

//Clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  groceryContainer.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  //localStorage.removeItem("list");
}

//Delete function
//Edit function

//Set back to default
function setBackToDefault() {
  // console.log("set back to default");
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

// ****** EVENT LISTENERS **********
//Submit form
form.addEventListener("submit", addItem);

//Clear items
clearBtn.addEventListener("click", clearItems);

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log("added to local storage");
}

// ****** SETUP ITEMS **********
