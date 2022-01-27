import bannerUrl from './assets/banner.png'
export {loadAboutPage}

function loadAboutPage() {
    let container = document.getElementById('container')

    let block1 = document.createElement('div')
    block1.id = "block1"
    
    let block1Text = document.createElement('div')
    block1Text.id = "block1Text"
    block1Text.textContent = "South Wall Cornerclub is a cornerclub located in Balmora. It is suggested as a starting point during the main quest Report to Caius Cosades. The club serves as the Thieves Guild base of operations in Balmora. Several guild members can be found within, including the building's owner, Bacola Closcius, as well as a number of tavern services."
    
    let banner = document.createElement('img')
    banner.src = bannerUrl

    block1.appendChild(banner)
    block1.appendChild(block1Text)
    container.appendChild(block1)

}