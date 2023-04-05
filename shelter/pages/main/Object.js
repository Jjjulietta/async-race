export class Object {
    constructor({name, img, type, breed, description, age, inoculations, diseases, parasites}) {
        this.name = name;
        this.img = img;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }
    getObject(){
        let template = '';
        let card = document.createElement('div');
        card.className = 'friends__card';
        this.img && (template += `<img class = "card__img" src = ${this.img} alt = "card-img">`)
        this.name && (template += `<div class = "card__subtitle">${this.name}</div>`)
        template += `<button type="button" class = "card__button btn2">Learn more</button>`
        card.innerHTML = template;
        return card;
    }
    getPopap(){
        let template = '';
        let popapbody = document.createElement('div');
        popapbody.className = 'popap__body';
        this.img && (template += `<img class = "popap__img" src = ${this.img} alt = "popap-img">`)
        let templateTwo = '';
        this.name && (templateTwo += `<h3 class = popap__title>${this.name}</h3>`)
        this.type && this.breed && (templateTwo +=`<div class = "popap__subtitle">${this.type} - ${this.breed}</div>` )
        this.description && (templateTwo += `<p class = "popap__text">${this.description}</p>`);
        
        let templateThree = '';
        this.age && (templateThree += `<li class = "list__item"><span class = "item__name">Age:</span><span class = "item__value">${this.age}</span></li>`)
        this.inoculations && (templateThree += `<li class = "list__item"><span class = "item__name">Inoculations:</span><span class = "item__value">${this.inoculations}</span></li>`)
        this.diseases && (templateThree += `<li class = "list__item"><span class = "item__name">Diseases:</span><span class = "item__value">${this.diseases}</span></li>`)
        this.parasites && (templateThree += `<li class = "list__item"><span class = "item__name">Parasites:</span><span class = "item__value">${this.parasites}</span></li>`)
        
        templateTwo = templateTwo + `<ul class = "popap__list">${templateThree}</ul>`
        popapbody.innerHTML = template + `<div class = "popap__content">${templateTwo}</div>`
        
        return popapbody;

    }
}