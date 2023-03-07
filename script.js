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

//survoler un element et le selectionner
let survol=document.querySelectorAll('p')
for(let i=0; i<survol.length; i++){
    survol[i].addEventListener("mouseenter", () => {
    survol[i].className = "active";
    })
    survol[i].addEventListener("mouseleave", () => {
    survol[i].className = "p";
    })
}

