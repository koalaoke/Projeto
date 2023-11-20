let recipes = 
    [
        {
            "title": "Pudim de Morango",
            "prep": 3,
            "rating": 3.5,
            "dificulty": "2",
            "image": "https://images.unsplash.com/photo-1452968011964-24f8831c43c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "title": "Cookies",
            "prep": 3,
            "rating": 5,
            "dificulty": "1",
            "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "title":"Bolo de cenoura",
            "prep": 15,
            "rating": 5,
            "dificulty": "3",
            "image": "https://i0.wp.com/tortamaria.com/wp-content/uploads/2022/06/BCenoura.png?fit=1024%2C1024&ssl=1" 
        },
        {
            "title":"Coxinha",
            "prep":"",
            "rating":"",
            "dificulty": "1",
            "image":""
        },
        {
            "title":"Torta de frango",
            "prep":"",
            "rating":"",
            "dificulty": "3",
            "image":""
        },
        {
            "title":"Lasanha a bolonhesa",
            "prep":"",
            "rating":"",
            "dificulty": "2",
            "image":""
        }
      ]
 
let create_items = (array) => {
    let grouper = document.getElementById('recipes-grouper')
    if (grouper) {
        array.forEach((item) => {
            let map = {
                1:'recipe-easy',
                2:'recipe-medium',
                3:'recipe-hard'
            };
            let divdesc = document.createElement('div')
            let divimg = document.createElement('div')
            let img    = document.createElement('img')
            let name   = document.createElement('h3')
            let rating = document.createElement('p')
            let prep   = document.createElement('p')
            
            let dificulty =  item.dificulty

            img.setAttribute('src',item.image)
            name.innerHTML = item.title
            rating.innerHTML = item.rating
            prep.innerHTML = item.prep

            divdesc.className = 'recipe-info'
            divimg.className = 'recipe-photo'
            name.className = 'recipe-name'
            rating.className = 'recipe-rating'
            prep.className =  'recipe-desc'

            let link = document.createElement('a')
            link.setAttribute('href', `recipes/${name.innerHTML.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.html`)
            
            let content = document.createElement('section')
            content.className =  'recipe-content'

            content.appendChild(name)
            content.appendChild(divdesc)
            
            divdesc.appendChild(rating)
            divdesc.appendChild(prep)

            divimg.appendChild(img)

            link.appendChild(divimg)
            link.appendChild(content)

            let div = document.createElement('div')
            div.className = `recipe ${map[dificulty]}`

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

        if(filtered.length == 0){
            let grouper = document.getElementById('recipes-grouper')

            let nonFound = document.createElement('h2')
            nonFound.innerHTML = "Não achamos nada. Foi mal. :("

            grouper.appendChild(nonFound)
        }
    })
} else {
    console.log("Noat found")
}

create_items(recipes)