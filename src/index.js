console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropdown = document.querySelector('#breed-dropdown')
const ul = document.querySelector("#dog-breeds")

fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(element => {
            img = document.createElement('img')
            img.src = element
            document.querySelector("#dog-image-container").append(img)
        })
    })

fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        breeds = Object.keys(data.message)
        renderBreeds(breeds)
    })

dropdown.addEventListener('change', handleDropdown)

function colorChange(element) {
    element.target.style.color = 'indigo'
}

function renderBreeds(breeds) {
    breeds.forEach(breed => {
        let li = document.createElement('li')
        li.textContent = breed
        li.addEventListener('click', colorChange)
        ul.append(li)
    })
}

function handleDropdown(e) {
    const letter = e.target.value
    filterBreeds = breeds.filter(breed => breed.startsWith(letter))
    ul.innerHTML = ''
    renderBreeds(filterBreeds)
}