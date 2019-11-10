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


    findAllAnimals = () => fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


    findAnimalById = (animalId) => fetch(url + animalId).then(response => response.json());
}

