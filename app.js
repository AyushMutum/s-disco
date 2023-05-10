
let image = document.getElementById('s-img')
image.style.display = 'none'
let magic = document.getElementById('magic')
magic.style.display = 'none'

function showMagic(){
    let title = document.getElementById('title')
    title.style.display = 'none'
    magic.style.display = 'block'

    let btn = document.getElementById('btn')
    btn.style.display = 'none'

    image.style.display = 'block'
    image.classList.add = 'img'
}   