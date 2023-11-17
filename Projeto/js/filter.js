let recipes;

console.log("buceta")

fetch("./recipesJson.json") 
.then(response => response.json())
.then(data => {
    console.log("bu1ceta")
    recipes = data.recipes; // Assuming the JSON file has a top-level key 'recipes' containing an array of recipe objects
    console.log(recipes); // You can now use the 'recipes' variable to access the recipe data
  })
  .catch(error => console.error(error));
 
let create_items = (array) => {
    let grouper = document.getElementById('recipes-grouper')
    if (grouper) {
        array.forEach((item) => {
            let img    = document.createElement('img')
            let name   = document.createElement('h3')
            let rating = document.createElement('p')
            let prep   = document.createElement('p')

            img.setAttribute('src',item.image)
            name.innerHTML = item.title
            rating.innerHTML = item.rating
            prep.innerHTML = item.prep

            img.className = 'recipe-photo'
            name.className = 'recipe-name'
            rating.className = 'recipe-rating'
            prep.className =  'recipe-desc'
            
            let link = document.createElement('a')
            link.setAttribute('href', `recipes/${name.innerHTML.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.html`)
            
            let content = document.createElement('section')
            content.className =  'recipe-content'

            content.appendChild(name)
            content.appendChild(rating)
            content.appendChild(prep)

            link.appendChild(img)
            link.appendChild(content)

            let div = document.createElement('div')
            div.className = 'recipe'

            div.appendChild(link)
            grouper.appendChild(div)
        })
    } else {
        console.log("Not found")
    }
}
 
let input_filter = document.getElementById("search-field")
let keyup_map = {"SHIFT": false}
if (input_filter) {
    input_filter.addEventListener('keyup', (event) => {
        if (event.key == 'Shift') return
        let str = event.target.value.toLowerCase()        
        let filtered = recipes.filter((item)=>{
            return item.title.toLowerCase().indexOf(str) != -1
        })
        let grouper = document.getElementById('recipes-grouper')
        grouper.querySelectorAll('*').forEach(n => n.remove());
        create_items(filtered)
    })
} else {
    console.log("Noat found")
}

create_items(recipes)