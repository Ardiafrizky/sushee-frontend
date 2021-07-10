const menus = [
    {
        "id": 1,
        "category": "Nigiri Sushi",
        "name": "Salmon Nigiri",
        "imageUrl": "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
    },
    {
        "id": 2,
        "category": "Maki Sushi",
        "name": "Salmon Maki",
        "imageUrl": "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        "id": 3,
        "category": "California Maki Sushi",
        "name": "California Tuna Maki",
        "imageUrl": "https://images.unsplash.com/photo-1570780775848-bc1897788ce0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
]

document.getElementById("menu").innerHTML = `
<div class="menu-title">Menu</div>

${menus.map(function(menu) {
    return `
        <div class="menu">
            <div class="menu-category">${menu.category}</div>
            <div class="menu-container">
                <img src="${menu.imageUrl}" class="menu-image" alt="menu-image" id="menu-image">
                <div class="menu-name">${menu.name}</div>
               
            </div>
        </div>
        `
    }).join('')}

`


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

const slideValue = document.querySelector("span");
      const inputSlider = document.querySelector("input");
      inputSlider.oninput = (()=>{
        let value = inputSlider.value;
        slideValue.textContent = value;
        slideValue.style.left = (value/2) + "%";
        slideValue.classList.add("show");
      });
      inputSlider.onblur = (()=>{
        slideValue.classList.remove("show");
      });

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal 
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


