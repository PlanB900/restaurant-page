
export {loadMenuPage}
import breadURL from "./assets/bread.jpg"
import ratMeatURL from "./assets/ratMeat.jpg"
 

function loadMenuPage() {
    let container = document.getElementById('container')

    let menu = document.createElement('div')
    menu.id = "menu"

    menu.appendChild(createFoodCard(
        'Bread',
        'A bland, likely stale loaf of bread.',
        breadURL,
        'bread'
        ))
    
    menu.appendChild(createFoodCard(
        'Rat Meat',
        'A veiny flank of raw meat cut from one of the many rats infesting the attics and alleys of Balmora.',
        ratMeatURL,
        'ratMeat'
    ))

    container.appendChild(menu)

}

function createFoodCard(name, description, image, className) {
    const foodCard = document.createElement('div')
    foodCard.classList.add('foodCard')

    const foodCardName = document.createElement('div')
    foodCardName.classList.add('foodCardName')
    foodCardName.textContent = name

    const foodCardDesc = document.createElement('div')
    foodCardDesc.classList.add('foodCardDesc')
    foodCardDesc.textContent = description

    const foodCardImg = document.createElement('img')
    foodCardImg.classList.add('foodCardImg')
    foodCardImg.classList.add(className)
    foodCardImg.src = image

    foodCard.appendChild(foodCardImg)
    foodCard.appendChild(foodCardName)
    foodCard.appendChild(foodCardDesc)

    return foodCard
}