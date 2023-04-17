//document.getElementById('header').addEventListener('click',abc)
document.getElementById('header').onclick = abc
function abc(){
    document.getElementById('header').classList.remove('xyz')
}