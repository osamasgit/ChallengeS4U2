const characterList = document.getElementById('character-list');
const nextPage = document.getElementById('next-page');
const prevPage = document.getElementById('prev-page');
const firstPage = document.getElementById('first-page');

function pageOfCharacters(page) {
    //console.log('pagina:' + page)
    characterList.innerHTML = '';
fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => response.json())
    .then((data) => {
        //console.log(data);
        data.results.forEach((character, i) => {
            const container = document.createElement('div');
            container.classList.add('character-container');

            const characterImage = document.createElement('img');
            characterImage.src = data.results[i].image;
            characterImage.alt = data.results[i].name;

            const characterName = document.createElement('h2');
            characterName.textContent = `Name: ${data.results[i].name}`;

            const characterSpecies = document.createElement('p');
            characterSpecies.textContent = `Specie: ${data.results[i].species}`;

            container.appendChild(characterImage);
            container.appendChild(characterName);
            container.appendChild(characterSpecies);
            characterList.appendChild(container);
        });
    });
};

let page = 1;
pageOfCharacters(page);

nextPage.addEventListener('click', () => {
    page++;
    if(page > 42) {
        page = 42;
    };
    console.log(page);
    pageOfCharacters(page);
});

prevPage.addEventListener('click', () => {
    page--;
    if(page < 1) {
        page = 1;
    };
    console.log(page);
    pageOfCharacters(page);
});

firstPage.addEventListener('click', () => {
    page = 1;
    pageOfCharacters(page);
});