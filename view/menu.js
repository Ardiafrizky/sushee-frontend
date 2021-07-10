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


// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }


