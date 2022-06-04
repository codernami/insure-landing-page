const openIcon = document.getElementById('icon-hamburguer');
const navMenu = document.getElementById('menu')
const closeIcon = document.getElementById('icon-close')

openIcon.addEventListener('click', () => {
	navMenu.classList.add('show-menu')
	closeIcon.classList.add('show-icon')
	openIcon.classList.toggle('hide-icon')
})

closeIcon.addEventListener('click', () => {
	navMenu.classList.remove('show-menu')	
	closeIcon.classList.toggle('show-icon')	
	openIcon.classList.toggle('hide-icon')
})


