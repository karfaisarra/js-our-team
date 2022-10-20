// creare un array di oggetti per rappresentare i membri del team
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: './assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: './assets/img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Waleter gordon',
        role: 'Office Manager',
        image: './assets/img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: './assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: './assets/img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: './assets/img/barbara-ramos-graphic-designer.jpg'
    }
]

//Stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    for (const key in teamMember) {
        const member = teamMember[key];
        console.log(key, member);
    }
    
}
//Stampare l'informazioni su DOM
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    //console.log(teamMember);
    const cardMarkup = markupCreation (teamMember)
    //console.log(cardMarkup);
    document.querySelector('.row').insertAdjacentHTML('beforeend', cardMarkup)
}



//function
function markupCreation(element) {
    const markup = `
    <div class="col">
        <div class="card border-0 rounded-0">
            <img src="${element.image}" alt="">
            <h4 class="pt-3">${element.name}</h4>
            <p>${element.role}</p>
        </div>
    </div>`
    return markup;
}