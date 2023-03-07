// Définir un tableau de 4 éléments?
const tab = ['Mon Premier','Mon Deuxieme','Mon Troisieme','Mon Quatrieme']
// Générés dynamiquement des p à l'aide du tableau?
let leftPart= document.querySelector('.leftPart')
function generateur(){
    for(let i=0; i< tab.length; i++){
        let element1= document.createElement('p')
        element1.textContent=tab[i]
        leftPart.appendChild(element1)
    }
} 
generateur()

