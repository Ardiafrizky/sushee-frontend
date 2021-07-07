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
<h2 class="menu-title">Menu</h2>

${menus.map(function(menu) {
    return `
        <div class="menu">
            <h3>${menu.category}</h3>
            <div class="container">
                <img src="${menu.imageUrl}" class="image" alt="menu-image" id="menu-image">
                <div class="name">${menu.name}</div>
               
            </div>
        </div>
        `
    }).join('')}

`
{/* <button id="myBtn">Open Modal</button> */}

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


