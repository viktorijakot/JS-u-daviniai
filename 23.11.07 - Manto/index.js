const btn = document.querySelector('button')
const colorCode = document.querySelector('.span')
const body = document.querySelector('body')

const generatexColor = () => {
    const randomColor = Math.random().toString(16).slice(2,8)
    body.style.backgroundColor = "#" + randomColor
    colorCode.textContent = "#" + randomColor
}

btn.addEventListener('click', generatexColor)
body.addEventListener('mousewheel', generatexColor)