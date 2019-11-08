import {AnimalService} from "../services/AnimalService";
import {FIND_ALL_ANIMALS} from "./ActionTypes";

const defaultState = {
    animals: [],
    selectedAnimal: {}
}

const animalService = AnimalService.instance;

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case FIND_ALL_ANIMALS:
            animalService.findAllAnimals().then(animals => newState.animals = animals);
            return newState;
    }
}
