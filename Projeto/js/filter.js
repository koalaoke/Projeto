let recipes = 
    [
        {
            "title": "Pudim de Morango",
            "prep": 15,
            "rating": 5,
            "dificulty": "1",
            "image": "img\\pudimdemorango.jpg"
        },
        {
            "title": "Cookies",
            "prep": 30,
            "rating": 5,
            "dificulty": "1",
            "image": "img\\cookies.png"
        },
        {
            "title":"Bolo de cenoura",
            "prep": 60,
            "rating": 5,
            "dificulty": "3",
            "image": "img\\CenoraBolo.png" 
        },
        {
            "title":"Coxinha",
            "prep":"3",
            "rating":"10",
            "dificulty": "1",
            "image":"img\\coxinha.jpg"
        },
        {
            "title":"Torta de frango",
            "prep":"30",
            "rating":"4",
            "dificulty": "3",
            "image":"img\\tortadefrango.png"
        },
        {
            "title":"Lasanha a bolonhesa",
            "prep":"30",
            "rating":"4",
            "dificulty": "3",
            "image":"img\\lasanhaabolonhesa.jpg"
        }
      ]
 
const createRecipeElement = (recipe) => {
    const { title, prep, rating, dificulty, image } = recipe;

    const map = {
        1: 'recipe-easy',
        2: 'recipe-medium',
        3: 'recipe-hard'
    };


    const starsContainer = document.createElement('div');

    for (let i = 0; i < 5; i++) {
        let starIcon = document.createElement('span');
        starIcon.innerHTML = 'kid_star';
        starIcon.classList.add("material-symbols-rounded");
        
        if (i < rating) {
            starIcon.classList.add("star-fill"); // Adiciona a classe para estrela preenchida
        } else {
            starIcon.classList.add("star-empty"); // Adiciona a classe para estrela vazia
        }
    
        starsContainer.appendChild(starIcon);
    }

    
    const divDesc = document.createElement('div');
    let prepText = document.createElement('p');
    prepText.innerHTML = `<span class="material-symbols-rounded">timer</span>${prep} min`;

    divDesc.classList.add('recipe-info');
    divDesc.appendChild(starsContainer);
    divDesc.appendChild(prepText);

    const divImg = document.createElement('div');
    divImg.classList.add('recipe-photo');
    divImg.innerHTML = `<img src="${image}" alt="${title}" />`;

    const name = document.createElement('h3');
    name.classList.add('recipe-name');
    name.textContent = title;
    
    const div = document.createElement('div');
    
    const content = document.createElement('section');
    content.classList.add('recipe-content');
    content.appendChild(name);
    content.appendChild(divDesc);
    
    const link = document.createElement('a');
    link.href = `recipes/${title.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.html`;
    link.classList.add('recipe', map[dificulty]);
    
    link.appendChild(divImg);
    link.appendChild(content);

    return link;
};

const createItems = (array) => {
    const grouper = document.getElementById('recipes-grouper');
    if (grouper) {
        const fragment = document.createDocumentFragment();
        array.forEach((item) => {
            const recipeElement = createRecipeElement(item);
            fragment.appendChild(recipeElement);
        });
        grouper.appendChild(fragment);
    } else {
        console.log("Not found");
    }
};

let inputFilter = document.getElementById("search-field");
if (inputFilter) {
    inputFilter.addEventListener('keyup', (event) => {
        const searchString = event.target.value.toLowerCase();
        const filteredRecipes = recipes.filter((item) => {
            return item.title.toLowerCase().includes(searchString);
        });

        const grouper = document.getElementById('recipes-grouper');
        grouper.innerHTML = ''; // Limpa o conteúdo anterior

        if (filteredRecipes.length === 0) {
            const nonFound = document.createElement('h2');
            nonFound.textContent = "Não achamos nada. Foi mal. :(";
            grouper.appendChild(nonFound);
        } else {
            createItems(filteredRecipes);
        }
    });
} else {
    console.log("Not found");
}

createItems(recipes);