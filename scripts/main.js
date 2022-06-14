const openIcon = document.getElementById('icon-open-menu');
const navMenu = document.getElementById('menu')
const closeIcon = document.getElementById('icon-close-menu')

openIcon.addEventListener('click', () => {
	navMenu.classList.add('show-menu')
	closeIcon.classList.add('show-icon')
	openIcon.classList.toggle('hide')
})

closeIcon.addEventListener('click', () => {
	navMenu.classList.remove('show-menu')	
	closeIcon.classList.toggle('show-icon')	
	openIcon.classList.toggle('hide')
})


