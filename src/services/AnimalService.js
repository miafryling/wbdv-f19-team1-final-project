let _singleton = Symbol();

let url = 'https://wbdv-f19-team1-backend.herokuapp.com/api/';


export class AnimalService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!')
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new AnimalService(_singleton)
        return this[_singleton]
    }

    getAnimalTypes = () => fetch(url + '/types').then(response => response.json());

    findAnimalsWithCriteria = (criteria) => fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(criteria)
    }).then(response => response.json());

    findAllAnimals = () => this.findAnimalsWithCriteria({});

    findAnimalById = (animalId) => fetch(url + animalId).then(response => response.json());

    likeAnimal = (userId, animalId) => {

    }
}

