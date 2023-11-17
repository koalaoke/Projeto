let recipes = [
    {title: "Pudim de Morango", prep: 3, rating: 3.5, image: "https://images.unsplash.com/photo-1452968011964-24f8831c43c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {title: "Pudim de Melão", prep: 4, rating: 2.5, image: "https://images.unsplash.com/photo-1452968011964-24f8831c43c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {title: "Pudim de Abacaxi", prep: 2, rating: 1.5, image: "https://images.unsplash.com/photo-1452968011964-24f8831c43c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {title: "Pudim de Uva", prep: 4, rating: 5, image: "https://images.unsplash.com/photo-1452968011964-24f8831c43c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
 
let create_items = (array) => {
    let grouper = document.getElementById('recipes-grouper')
    if (grouper) {
        array.forEach((item) => {
            let img    = document.createElement('img')
            let name   = document.createElement('h3')
            let rating = document.createElement('p')
            let prep   = document.createElement('p')

            img.innerHTML = item.image
            name.innerHTML = item.title
            rating.innerHTML = item.rating
            prep.innerHTML = item.prep

            img.className = 'recipe-photo'
            name.className = 'recipe-name'
            rating.className = 'recipe-rating'
            prep.className =  'recipe-desc'
            
            let link = document.createElement('a')
            link.setAttribute('scr', `recipes/${name.innerHTML.toLowerCase.replace(/\s/g, "")}.html`)
            
            let content = document.createElement('section')
            content.className =  'recipe-content'

            content.appendChild(name)
            content.appendChild(rating)
            content.appendChild(prep)

            link.appendChild(img)
            link.appendChild(content)

            grouper.appendChild(link)
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
        let str = event.target.value        
        let filtered = recipes.filter((item)=>{
            return item.title.indexOf(str) != -1
        })
        let grouper = document.getElementById('recipes-grouper')
        grouper.querySelectorAll('*').forEach(n => n.remove());
        create_items(filtered)
    })
} else {
    console.log("Noat found")
}

console.log("a")
create_items(recipes)
console.log("a")