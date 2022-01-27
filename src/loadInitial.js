export {loadInitial}

function loadInitial() {
    let content = document.getElementById('content')
    let header = document.createElement('div')
    let headerTitle = document.createElement('div')
    let headerAbout = document.createElement('a')
    let headerMenu = document.createElement('a')
    let headerContact = document.createElement('a')
    let container = document.createElement('div')
    let footer = document.createElement('div')

    header.id='header'
    headerTitle.textContent = "The South Wall Cornerclub"
    headerTitle.id = 'headerTitle'
    headerAbout.textContent = "About"
    headerAbout.classList.add('headerLink')
    headerMenu.textContent = 'Menu'
    headerMenu.classList.add('headerLink')
    headerContact.textContent = 'Contact'
    headerContact.classList.add('headerLink')
    container.id = 'container'
    footer.id = 'footer'
    footer.textContent = "View on GitHub"

    function render(){
        header.appendChild(headerTitle)
        header.appendChild(headerAbout)
        header.appendChild(headerMenu)
        header.appendChild(headerContact)
        content.appendChild(header)
        content.appendChild(container)
        content.appendChild(footer)
    }

    return {
        container,
        content,
        render,
        headerAbout,
        headerMenu,
        headerContact
    }
}