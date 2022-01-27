export {loadContactPage}
import mapURL from "./assets/map.jpg"

function loadContactPage() {
    let container = document.getElementById('container')

    const contact = document.createElement('div')
    contact.classList.add('contact')

    const map = document.createElement('img')
    map.classList.add('map')
    map.src = mapURL

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contactInfo')
    contactInfo.textContent = 'Reach Balmora via silt strider or the Mages Guild teleport service. The club is located on the southeast corner of town.'

    contact.appendChild(map)
    contact.appendChild(contactInfo)
    container.appendChild(contact)

}