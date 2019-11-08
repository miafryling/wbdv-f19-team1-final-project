let _singleton = Symbol();

let url = '';

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

    findAllAnimals = () => fetch(url).then(response => response.json());

    findAnimalById = (animalId) => fetch(url + "/" + animalId).then(response => response.json());
}

