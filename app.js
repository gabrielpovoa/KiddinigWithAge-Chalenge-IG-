let dateField = document.getElementById('yourBirth')
let calcBtn = document.getElementById('calcule')
let picture = document.getElementById('picture')
let img = document.querySelector('.image')
let age = document.getElementById('age')



const getDate = () => {
    let newDate = dateField.value
    console.log(newDate)
    let year = new Date(newDate); // Data de nascimento = capturada
    let userDate = year.getFullYear()
    let currentlyYear = new Date().getFullYear()
    let userAge = (userDate - currentlyYear) * (-1);

    if (userAge <= 12) {
        age.innerHTML = `sua idade é ${userAge}`;
        img.style.background = 'red'
        picture.setAttribute('src', 'img/baby.png')
    } else if (userAge <= 20) {
        age.innerHTML =  `sua idade é ${userAge}`;
        img.style.background = '#454545'
        picture.setAttribute('src', 'img/teen.png')
    } else if (userAge > 50) {
        age.innerHTML =  `sua idade é ${userAge} anos`;
        img.style.background = '#FFF'
        picture.setAttribute('src', 'img/grandpa.png')
    }
}




calcBtn.addEventListener('click', getDate)