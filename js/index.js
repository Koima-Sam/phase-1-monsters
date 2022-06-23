document.addEventListener('DOMContentLoaded', (e) =>{
    e.preventDefault()
    loadMonsters()
})
//fetch data from a monster api
function loadMonsters(){
    fetch("http://localhost:3000/monsters/?_limit=50&")
    .then(response => response.json())
    .then(monsters =>{
        monsters.forEach(monster =>{
            displayMonster(monster);
        })
    })
}
//Load the monsters to dom
function displayMonster(item){
    let div = document.querySelector('#monster-container')
    let h2 = document.createElement('h2')
    h2.textContent = item.name
    let p =  document.createElement('p')
    p.textContent = item.description
    let h4 = document.createElement('h4')
    h4.textContent = `Age: ${item.age}`

    div.append(h2,h4,p)
}