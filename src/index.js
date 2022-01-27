import './assets/styles.css';
import { loadAboutPage } from './loadAboutPage';
import { loadContactPage } from './loadContactPage';
import { loadInitial } from './loadInitial';
import { loadMenuPage } from './loadMenuPage';

let initState = loadInitial()
initState.render()
loadAboutPage()

initState.headerAbout.addEventListener('click',() => {
    initState.container.firstChild.remove()
    loadAboutPage()
})

initState.headerMenu.addEventListener('click',() => {
    initState.container.firstChild.remove()
    loadMenuPage()
})

initState.headerContact.addEventListener('click',() => {
    initState.container.firstChild.remove()
    loadContactPage()
})
