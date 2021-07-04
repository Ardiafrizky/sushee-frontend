const menuData = [
    {
        "id": 2,
        "name": "Sushi Maki",
        "description": "this is a description",
        "unit": "gelas",
        "imageUrl": "https"
    },
    {
        "id": 5,
        "name": "Sushi Roll",
        "description": "dog and cat",
        "unit": "meja",
        "imageUrl": "https2"
    },
    {
        "id": 6,
        "name": "Ebi",
        "description": "pizza",
        "unit": "kursi",
        "imageUrl": "https3"
    }
]

document.getElementById("foodmenu").innerHTML = `
<h1>Menu (${menuData.length} results)</h1>
${menuData.map(function(menu) {
    return `
    <div>
        <h2 class="menu">${menu.name}</h2>
        <p>${menu.description}</p>
    </div>
    `
}).join('')}
<footer>All right reserved C 2021.</footer>
`

